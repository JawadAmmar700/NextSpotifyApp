import axios from "axios"

const getTopArtists = async (token: string) => {
  const data = await axios.get(
    "https://api.spotify.com/v1/artists?ids=2CIMQHirSU0MQqyYHq0eOx%2C57dN52uHvrHOxijzpIgu3E%2C1vCWHaC5f2uS3yhpwWbIA6%2C7jVv8c5Fj3E9VhNjxT4snq%2C1Xyo4u8uXC1ZmMpatF05PJ",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
  return data
}

export { getTopArtists }
