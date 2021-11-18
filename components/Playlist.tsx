import React, { useEffect, useState } from "react"
import { getPlaylists } from "../lib/queries/getPlaylists"

const PlayList = ({ token }) => {
  const [playlist, setPlayList] = useState<any>()

  useEffect(() => {
    if (token) {
      getPlaylists(token).then(data => {
        setPlayList(data.data.playlists.items.slice(0, 5))
        console.log(data)
      })
    }
  }, [token])

  return (
    <div className="px-4">
      <div>
        <h1 className="text-white text-2xl font-medium">Pick a playlist</h1>
      </div>
      <div className="flex mt-6  space-x-4">
        {playlist &&
          playlist.map((playlist, id) => (
            <div
              key={id}
              className="w-[200px] bg-[#171717] h-[250px] flex justify-center items-center hover:bg-[#282828] group cursor-pointer"
            >
              <div className="flex flex-col space-y-4 text-white ">
                <img
                  src={playlist.images[0].url}
                  alt={playlist.name}
                  className="w-[150px] h-[150px] scale-100  group-hover:scale-105 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-bold">
                    {playlist.name.substring(0, 20)}...
                  </p>
                  <p className="text-sm w-[160px]">
                    {" "}
                    {playlist.description.substring(0, 40)}...
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default PlayList
