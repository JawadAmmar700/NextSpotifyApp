import axios from "axios"

const getNewReleases = async (token: string) => {
  const data = await axios.get(
    "https://api.spotify.com/v1/browse/new-releases",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
  return data
}

export { getNewReleases }
