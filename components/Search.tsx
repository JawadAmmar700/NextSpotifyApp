import React, { useEffect, useState } from "react"
import useToken from "../lib/hooks/useToken"
import Browse from "./Browse"
import { useRecoilValue } from "recoil"
import { searchText } from "../atom"
const SpotifyWebApi = require("spotify-web-api-node")
import TopResult from "./TopResult"
import SearchArtists from "./SearchArtists"
import SearchAblums from "./SearchAblums"
import RelatedArtists from "./RelatedArtists"

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET,
})

const SearchPage = () => {
  const token = useToken()
  const value = useRecoilValue(searchText)
  const [topResult, setTopResult] = useState([])
  const [topTracks, setTopTracks] = useState([])
  const [topAlbums, setTopAlbumns] = useState([])
  const [relatedArtists, setRelatedArtists] = useState([])

  useEffect(() => {
    if (value && token) {
      spotifyApi.setAccessToken(token)
      spotifyApi.searchArtists(value).then(function (data) {
        setTopResult(data.body.artists.items)
        if (topResult.length > 0) {
          spotifyApi
            .getArtistTopTracks(topResult[0]?.id, "GB")
            .then(function (data) {
              setTopTracks(data.body.tracks)
            })
          spotifyApi.getArtistAlbums(topResult[0]?.id).then(function (data) {
            setTopAlbumns(data.body.items.slice(0, 5))
          })
          spotifyApi
            .getArtistRelatedArtists(topResult[0]?.id)
            .then(function (data) {
              setRelatedArtists(data.body.artists.slice(0, 5))
            })
        }
      })
    }
  }, [value])

  if (!token) {
    return (
      <div className="flex flex-col items-center justify-center text-white mt-24">
        <h1 className="text-4xl font-bold">Spotify</h1>
        <p className="text-xl">Please login to view your Spotify data</p>
      </div>
    )
  }

  return (
    <div className="flex-grow">
      {!value || topResult.length < 0 ? (
        <Browse token={token} />
      ) : (
        <div className="mb-36">
          <TopResult artists={topResult} topTracks={topTracks} />
          <RelatedArtists relatedArtists={relatedArtists} />
          <SearchArtists artists={topResult} />
          <SearchAblums albums={topAlbums} />
        </div>
      )}
    </div>
  )
}

export default SearchPage
