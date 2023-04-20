import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { buildNextAuthOptions } from '../auth/[...nextauth].api'
import { prisma } from '@/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }
  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )
  if (!session) {
    return res.status(401).end()
  }

  const { rate, description, userId, bookId } = req.body

  prisma.rating.create({
    data: {
      rate,
      description,
      user: {
        connect: { id: userId },
      },
      book: {
        connect: { id: bookId },
      },
    },
  })

  return res.status(201).end()
}
