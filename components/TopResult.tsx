import React from "react"
import { DotsHorizontalIcon } from "@heroicons/react/outline"
import { useRecoilState } from "recoil"
import { nowPlaying } from "../atom"

const TopResult = ({ artists, topTracks }) => {
  const [track, setTrack] = useRecoilState(nowPlaying)

  const millisToMinutesAndSeconds = (millis: number) => {
    var minutes = Math.floor(millis / 60000)
    var seconds = ((millis % 60000) / 1000).toFixed(0)
    return minutes + ":" + (parseInt(seconds) < 10 ? "0" : "") + seconds
  }

  return (
    <div className="flex space-x-6 px-4 mt-6 ">
      {artists && (
        <div className="flex-none">
          <h1 className="text-white text-2xl font-medium">Top Results</h1>
          <div className="w-[400px] bg-[#171717] h-[230px] py-5 flex px-5 mt-5 hover:bg-[#282828] group cursor-pointer">
            <div className="flex flex-col space-y-4 text-white ">
              <img
                src={artists[0]?.images[0]?.url}
                alt={artists[0]?.name}
                className="w-[100px] h-[100px] scale-100  group-hover:scale-105 rounded-full"
              />
              <div>
                <p className="text-2xl font-bold">
                  {artists[0]?.name.substring(0, 20)}
                </p>

                <p className="text-sm mt-3 font-bold ">
                  {artists[0]?.type.toUpperCase()}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {topTracks && (
        <div className=" flex-grow">
          <h1 className="text-white text-2xl font-medium">Songs</h1>
          <div className="mt-5">
            {topTracks.slice(0, 4).map((track, index) => (
              <div
                onClick={() => setTrack(track)}
                key={index}
                className="flex items-center justify-between p-2 hover:bg-[#282828] rounded"
              >
                <div className="flex space-x-3 items-center">
                  <img
                    src={track.album.images[0].url}
                    alt={track.name}
                    className="w-[40px] h-[40px] "
                  />
                  <div className="text-white">
                    <p className="text-sm font-bold ">{track.name}</p>
                    <p className="text-sm text-[#A7A7A7]">{artists[0]?.name}</p>
                  </div>
                </div>
                <div className="flex space-x-3 ">
                  <p className="text-[#A7A7A7]">
                    {millisToMinutesAndSeconds(track.duration_ms)}
                  </p>
                  <DotsHorizontalIcon className="text-white w-6 h-6" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default TopResult
