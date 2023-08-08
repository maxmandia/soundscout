'use client'
import { useState } from 'react'
import Image from 'next/image'
import { ArtistInterface } from '../interfaces/ArtistInterface'
import debounce from 'lodash.debounce'
import { UserButton, useUser } from '@clerk/nextjs'

function Navbar() {
  const [artists, setArtists] = useState<ArtistInterface[] | null>(null)
  const [showModal, setShowModal] = useState<boolean>(false)
  const { user } = useUser()

  console.log(user)

  function handleSearch() {
    return async function (search: string) {
      if (search === '') {
        setArtists(null)
        return
      }
      try {
        let resp = await fetch(
          `http://localhost:3000/api/search-artists?artist=${search}`
        )

        let data = await resp.json()
        console.log(data)
        setArtists(data.artists.items)
        setShowModal(true)
      } catch (error) {
        console.log(error)
      }
    }
  }

  //   async function followArtist() {
  //     if (!user) return console.log("no user");

  //     const user_id = user.id;

  //     try {
  //       let resp = await fetch(`http://localhost:3001/follow-artist?artist=`, {
  //         method: "PUT",
  //       });
  //       let data = await resp.json();
  //       console.log(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  let debounceSearch = debounce(handleSearch(), 500)

  return (
    <div>
      <nav className="flex items-center justify-between gap-3 px-4 py-8">
        <input
          onBlur={() => setShowModal(false)}
          onFocus={() => setShowModal(true)}
          className="w-full rounded-[6px] border-[.5px] border-input-txt bg-input-bg pb-3 pl-2 pt-3 text-white"
          placeholder="Search for artists"
          type="text"
          onChange={(e) => debounceSearch(e.target.value)}
        />
        {user && <UserButton afterSignOutUrl="/sign-in" />}
      </nav>
      {artists && showModal && (
        <div className="mx-4 flex max-h-[50vh] flex-col gap-8 overflow-scroll rounded-[6px] border-[.5px] border-input-txt bg-input-bg py-4">
          {artists.map((artist) => (
            <div
              className="flex items-center justify-between px-3"
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
                  <h4 className="text-[17px] font-bold">{artist.name}</h4>
                  <h6>{artist?.genres[0] ?? 'unknown genre'}</h6>
                </div>
              </div>
              <button className="rounded-[4px] bg-slate-600 px-5 py-1 text-[14px] font-medium">
                follow
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Navbar
