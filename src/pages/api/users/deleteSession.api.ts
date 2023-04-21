import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { buildNextAuthOptions } from '../auth/[...nextauth].api'
import { prisma } from '@/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'DELETE') {
    return res.status(405).end()
  }
  const session: any = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )
  if (!session) {
    return res.status(401).end()
  }

  const { sessionToken }: any = req.query
  console.log(sessionToken)

  await prisma.session.delete({
    where: {
      session_token: sessionToken,
    },
  })

  return res.status(201).end()
}
