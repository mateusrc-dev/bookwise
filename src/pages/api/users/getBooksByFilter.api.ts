import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const { nameString }: any = req.query

  const responseSearchByName = await prisma.book.findMany({
    include: {
      categories: true,
    },
    where: {
      name: {
        contains: nameString,
      },
    },
  })

  return res.json({ responseSearchByName })
}
