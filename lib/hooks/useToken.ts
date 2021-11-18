import React, { useState, useEffect } from "react"

const useToken = () => {
  const [token, setToken] = useState<string>("")

  useEffect(() => {
    const token = async () => {
      const reponse = await fetch("/api/token")
      const data = await reponse.json()
      setToken(data?.token?.accessToken)
      // console.log(data.token.user)
    }
    token()
  }, [token])

  return token
}

export default useToken
