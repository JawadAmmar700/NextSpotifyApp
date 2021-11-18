import React, { useEffect, useState } from "react"
import { getRecentlyPlayed } from "../lib/queries/getRecentlyPlayed"
import { useRecoilState } from "recoil"
import { nowPlaying } from "../atom"

const Recently = ({ token }) => {
  const [recent, setRecent] = useState<any>()
  const [track, setTrack] = useRecoilState(nowPlaying)

  const filter = r => {
    let filtered = r
    for (let i = 0; i < filtered.length; i++) {
      if (filtered[i].track.id === filtered[i + 1]?.track.id) {
        filtered.splice(i, 1)
      }
    }
    return filtered
  }

  useEffect(() => {
    if (token) {
      getRecentlyPlayed(token).then(data => {
        setRecent(filter(data.data.items))
      })
    }
  }, [token])
  return (
    <div className="px-4 mt-6">
      <h1 className="text-white text-2xl font-medium">Recently Played</h1>

      {recent && (
        <div className="flex space-x-4 mt-4  ">
          {recent.map((recent, index) => (
            <div
              onClick={() => setTrack(recent.track)}
              key={index}
              className="w-[200px] bg-[#171717] h-[250px] flex justify-center items-center hover:bg-[#282828] group cursor-pointer"
            >
              <div className="flex flex-col space-y-4 text-white ">
                <img
                  src={recent.track.album.images[0].url}
                  alt={recent.track.name}
                  className="w-[150px] h-[150px] scale-100  group-hover:scale-105 "
                />
                <div>
                  <p className="text-sm font-bold">
                    {recent.track.name.substring(0, 20)}...
                  </p>
                  <p className="text-sm">{recent.track.artists[0].name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Recently
