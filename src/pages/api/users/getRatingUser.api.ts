import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { buildNextAuthOptions } from '../auth/[...nextauth].api'
import { prisma } from '@/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }
  const session: any = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )

  const { idBook }: any = req.query

  let response
  if (session) {
    try {
      response = await prisma.rating.findFirst({
        where: {
          user_id: session?.user?.id,
          book_id: idBook,
        },
        include: { user: true },
      })
    } catch (err) {
      console.log(err)
    }
  }

  if (session) {
    return res.json({ response })
  } else {
    return res.status(201).end()
  }
}
