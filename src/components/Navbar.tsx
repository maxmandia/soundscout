'use client'
import { useState } from 'react'
import Image from 'next/image'
import { ArtistInterface } from '../interfaces/ArtistInterface'
import debounce from 'lodash.debounce'
import { UserButton, useUser } from '@clerk/nextjs'

interface SearchResults {
  artists: {
    items: ArtistInterface[]
  }
  userFollowing: {
    artist_id: string
    user_id: string
    artist: {
      id: string
    }
  }[]
}

function Navbar() {
  const [searchResults, setSearchResults] = useState<SearchResults | null>(null)
  const [showModal, setShowModal] = useState<boolean>(false)
  const { user } = useUser()

  function handleSearch() {
    return async function (search: string) {
      if (search === '' || !user) {
        setSearchResults(null)
        return
      }

      try {
        let resp = await fetch(
          `http://localhost:3000/api/search-artists?artist=${search}&userId=${user.id}`
        )

        let data = await resp.json()
        console.log(data)
        setSearchResults(data)
        setShowModal(true)
      } catch (error) {
        console.log(error)
      }
    }
  }

  async function followHandler(artist: ArtistInterface, follow: boolean) {
    if (!user || !artist) {
      console.log('no user or artist')
      return
    }

    if (follow) {
      setSearchResults((prev) => {
        if (!prev) {
          return null
        }
        return {
          ...prev,
          userFollowing: [
            ...prev.userFollowing,
            {
              artist_id: artist.id,
              user_id: user.id,
              artist: {
                id: artist.id
              }
            }
          ]
        }
      })
    } else {
      setSearchResults((prev) => {
        if (!prev) {
          return null
        }
        return {
          ...prev,
          userFollowing: prev.userFollowing.filter(
            (followedArtist) => followedArtist.artist_id !== artist.id
          )
        }
      })
    }

    try {
      const user_id = user.id
      let resp = await fetch(
        `http://localhost:3000/api/${follow ? 'follow' : 'unfollow'}-artist`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ user_id, artist })
        }
      )
      let data: {
        status: string
      } = await resp.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  let debounceSearch = debounce(handleSearch(), 200)

  return (
    <div className="lg:flex lg:items-center lg:justify-end">
      <nav className="flex w-screen items-center justify-between px-6 py-7">
        <Image
          className="hidden lg:block"
          width={150}
          height={150}
          src={'/soundscout.svg'}
          alt="soundscout logo"
        />
        <div className="flex min-w-[100%] flex-col items-center justify-between lg:min-w-[28%]">
          <div className="flex min-w-[100%] items-center gap-3">
            <input
              onBlur={() => setShowModal(false)}
              onFocus={() => setShowModal(true)}
              className="w-full rounded-[6px] border-[.5px] border-input-txt bg-input-bg py-[5px] pl-2 text-white placeholder:text-[13px]"
              placeholder="Search for artists"
              type="text"
              onChange={(e) => debounceSearch(e.target.value)}
            />
            {user && <UserButton afterSignOutUrl="/sign-in" />}
          </div>
          {searchResults && showModal && (
            <div className="absolute top-[90px] mx-10 flex max-h-[50vh] w-[95%] flex-col overflow-scroll rounded-[6px] border-[.5px] border-input-txt bg-input-bg lg:right-[28px] lg:w-[24%]">
              {searchResults.artists.items.map((artist) => (
                <div
                  className="flex items-center justify-between px-3 py-5"
                  key={artist.id}
                >
                  <div className="flex items-center gap-3">
                    {artist.images[0]?.url ? (
                      <Image
                        width={50}
                        height={50}
                        className="h-[50px] w-[50px] rounded-[100px] bg-slate-600"
                        src={artist.images[0]?.url}
                        alt="artist image"
                      />
                    ) : (
                      <div className="flex h-[50px] w-[50px] items-center justify-center rounded-[100px] bg-slate-600">
                        <p>?</p>
                      </div>
                    )}
                    <div>
                      <h4 className="text-[14px] font-medium">{artist.name}</h4>
                      <h6 className="text-[12px]">
                        {artist?.genres?.[0] ?? 'unknown genre'}
                      </h6>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      let exists = searchResults.userFollowing.some(
                        (followedArtist) =>
                          followedArtist.artist_id === artist.id
                      )
                      if (exists) {
                        followHandler(artist, false)
                      } else {
                        followHandler(artist, true)
                      }
                    }}
                    className="rounded-[4px] bg-slate-600 px-5 py-[6px] text-[10px] font-medium hover:bg-slate-500"
                  >
                    {searchResults.userFollowing.length === 0
                      ? 'Follow'
                      : searchResults.userFollowing.some(
                          (followedArtist) =>
                            followedArtist.artist_id === artist.id
                        )
                      ? 'Unfollow'
                      : 'Follow'}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}

export default Navbar
