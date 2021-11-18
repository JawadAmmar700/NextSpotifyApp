import axios from "axios"

const getBrowseAll = async (token: string) => {
  const data = await axios.get(
    "https://api.spotify.com/v1/browse/categories?country=SE&locale=sv_SE&limit=50&offset=5",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
  return data
}

export { getBrowseAll }
