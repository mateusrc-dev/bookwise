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

  const { nameString }: any = req.query

  let response
  try {
    response = await prisma.rating.findMany({
      include: {
        book: { include: { categories: { include: { category: true } } } },
      },
      where: {
        user_id: session.user.id,
        book: {
          name: {
            contains: nameString,
          },
        },
      },
      orderBy: [{ created_at: 'desc' }],
    })
  } catch (err) {
    console.log(err)
  }

  return res.json({ response })
}
