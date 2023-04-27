import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const { idBook }: any = req.query

  let responseBook
  try {
    responseBook = await prisma.book.findFirst({
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
  } catch (err) {
    console.log(err)
  }

  return res.json({ responseBook })
}
