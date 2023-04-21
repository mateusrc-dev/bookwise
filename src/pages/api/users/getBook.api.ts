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
  if (!session) {
    return res.status(401).end()
  }

  const { idBook }: any = req.query

  const responseBook = await prisma.book.findFirst({
    include: {
      categories: true,
      ratings: {
        include: {
          user: true,
        },
      },
    },
    where: {
      id: {
        contains: idBook,
      },
    },
  })

  return res.json({ responseBook })
}
