import React, { useEffect, useState } from "react"
import { getNewReleases } from "../lib/queries/getNewReleases"

const NewReleases = ({ token }) => {
  console.log(token)
  const [newReleases, setNewReleases] = useState<any>()

  useEffect(() => {
    if (token) {
      getNewReleases(token).then(data => {
        setNewReleases(data.data.albums.items)
      })
    }
  }, [token])

  return (
    <div className="px-4 mt-6">
      <h1 className="text-white text-2xl font-medium">Popular New Releases</h1>
      <p className="text-sm text-gray-300">The best new music this week</p>
      {newReleases && (
        <div className="flex space-x-4 mt-4  ">
          {newReleases.slice(1, 6).map((album, index) => (
            <div
              key={index}
              className="w-[200px] bg-[#171717] h-[250px] flex justify-center items-center hover:bg-[#282828] group cursor-pointer"
            >
              <div className="flex flex-col space-y-4 text-white ">
                <img
                  src={album.images[0].url}
                  alt={album.name}
                  className="w-[150px] h-[150px] scale-100  group-hover:scale-105 "
                />
                <div>
                  <p className="text-sm font-bold">
                    {album.name.substring(0, 20)}...
                  </p>
                  <p className="text-sm">{album.artists[0].name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default NewReleases
