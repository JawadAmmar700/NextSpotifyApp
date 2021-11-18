import axios from "axios"

const getRecentlyPlayed = async (token: string) => {
  const data = await axios.get(
    "https://api.spotify.com/v1/me/player/recently-played ",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
  return data
}

export { getRecentlyPlayed }
