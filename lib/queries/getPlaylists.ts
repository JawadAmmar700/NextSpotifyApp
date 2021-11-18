import axios from "axios"

const getPlaylists = async (token: string) => {
  const data = await axios.get(
    "https://api.spotify.com/v1/browse/categories/dinner/playlists?country=SE&limit=10&offset=5",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
  return data
}

export { getPlaylists }
