import type { NextApiRequest, NextApiResponse } from "next"
import { getSession, useSession } from "next-auth/react"
import { getToken } from "next-auth/jwt"

const secret = process.env.NEXTAUTH_SECRET

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = await getToken({ req, secret })
  const session = await getSession({ req })
  if (!session && !token) res.status(401).json({ error: "Unauthorized" })
  res.status(200).json({ token, session })
}
