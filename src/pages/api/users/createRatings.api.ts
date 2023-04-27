import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { buildNextAuthOptions } from '../auth/[...nextauth].api'
import { prisma } from '@/lib/prisma'
import { v4 as uuidv4 } from 'uuid'

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

  type Props = {
    rate: number
    description: string
    userId: string
    bookId: string
  }

  const props: Props = req.body

  try {
    await prisma.rating.create({
      data: {
        id: uuidv4(),
        rate: props.rate,
        description: props.description,
        user: {
          connect: { id: props.userId },
        },
        book: {
          connect: { id: props.bookId },
        },
      },
    })
  } catch (err) {
    console.log(err)
  }

  return res.status(201).end()
}
