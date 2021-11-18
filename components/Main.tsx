import React, { useEffect, useState } from "react"
import useToken from "../lib/hooks/useToken"
import NewReleases from "./NewReleases"
import PlayList from "./Playlist"
import Recently from "./Recently"
import TopArtists from "./TopArtists"

const Main = () => {
  const token = useToken()

  return (
    <div className="flex flex-col space-y-5 mb-36">
      {!token ? (
        <div className="flex flex-col items-center justify-center text-white mt-24">
          <h1 className="text-4xl font-bold">Spotify</h1>
          <p className="text-xl">Please login to view your Spotify data</p>
        </div>
      ) : (
        <>
          <Recently token={token} />
          <NewReleases token={token} />
          <TopArtists token={token} />
          <PlayList token={token} />
        </>
      )}
    </div>
  )
}

export default Main
