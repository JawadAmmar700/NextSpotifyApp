import React, { useEffect, useState } from "react"
import { useRecoilValue } from "recoil"
import { nowPlaying } from "../atom"
import {
  DesktopComputerIcon,
  HeartIcon,
  PlayIcon,
  VolumeUpIcon,
} from "@heroicons/react/outline"
import ReactAudioPlayer from "react-audio-player"

const Player = () => {
  const track = useRecoilValue(nowPlaying)
  const [volumeState, setVolumeState] = useState<number>()

  return (
    <div>
      {track !== null ? (
        <div className="flex items-center w-full h-[90px]  justify-evenly">
          <div className="flex items-center">
            <img
              src={track?.album?.images[0].url}
              alt={track?.name}
              className="w-[40px] h-[40px] "
            />

            <div className="ml-4 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-white">{track?.name}</h3>
                <p className="text-sm text-[#A7A7A7]">
                  {track?.artists[0].name}
                </p>
              </div>
              <div className="flex space-x-2 ml-8">
                <HeartIcon className="text-[#8D8D8D] w-5 h-5 hover:text-white" />
                <DesktopComputerIcon className="text-[#8D8D8D] w-5 h-5 hover:text-white" />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center space-y-2">
            <div>
              <ReactAudioPlayer
                src={track?.preview_url}
                controls={true}
                autoPlay
                style={{
                  width: "400px",
                  height: "30px",
                  backgroundColor: "#181818",
                }}
                volume={volumeState}
              />
            </div>
          </div>
          <div className="flex space-x-3 items-center">
            <img
              src="/queue.png"
              alt="shuffle"
              className="w-[20px] h-[20px] text-white scale-100 hover:scale-105"
            />
            <img
              src="/connect.png"
              alt="shuffle"
              className="w-[20px] h-[20px] text-white scale-100 hover:scale-105"
            />
            <VolumeUpIcon className="w-[20px] h-[20px] text-white scale-100 hover:scale-105" />
            <input
              type="range"
              name="volume"
              id="volume"
              min="0"
              max="100"
              onChange={e => setVolumeState(parseInt(e.target.value) / 100)}
            />
          </div>
        </div>
      ) : (
        <div className="w-full h-[90px] flex items-center justify-center text-white">
          <h1 className="text-white text-2xl font-medium">No Track selected</h1>
        </div>
      )}
    </div>
  )
}

export default Player
