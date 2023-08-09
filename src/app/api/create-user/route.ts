import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { Webhook, WebhookRequiredHeaders } from 'svix'
import { IncomingHttpHeaders } from 'http'
import { prisma } from '../../../utils/prisma'

type EventType = 'user.created' | 'user.updated' | '*'

type Event = {
  data: Record<string, string | number>
  object: 'event'
  type: EventType
}

export async function POST(req: NextRequest) {
  const payload = await req.json()
  const headersList = headers()
  const heads = {
    'svix-id': headersList.get('svix-id'),
    'svix-timestamp': headersList.get('svix-timestamp'),
    'svix-signature': headersList.get('svix-signature')
  }
  const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET as any)
  let evt: Event | null = null

  try {
    evt = wh.verify(
      JSON.stringify(payload),
      heads as IncomingHttpHeaders & WebhookRequiredHeaders
    ) as Event
  } catch (err) {
    console.error('error from clerk', (err as Error).message)
    return NextResponse.json({}, { status: 400 })
  }

  const eventType: EventType = evt.type
  if (eventType === 'user.created') {
    const { first_name, last_name, email_addresses, id } = evt.data
    const email_address = email_addresses[0].email_address

    try {
      await prisma.user.create({
        data: {
          id: id as string,
          email: email_address,
          first_name: first_name as string,
          last_name: last_name as string
        }
      })
      return NextResponse.json({ message: 'success' })
    } catch (error) {
      console.log('error from db', error)
      return NextResponse.error()
    }
  }
}
