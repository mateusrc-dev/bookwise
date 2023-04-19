import { NextApiRequest, NextApiResponse } from 'next'
import { Adapter } from 'next-auth/adapters'
import { prisma } from '../prisma'
// import { parseCookies, destroyCookie } from 'nookies' // para buscar os cookies - para apagar os cookies

export function PrismaAdapter(
  req: NextApiRequest, // vamos receber essas variáveis para ter acesso aos cookies
  res: NextApiResponse,
): Adapter {
  return {
    async createUser(user) {
      const userExist = await prisma.user.findUnique({
        where: {
          email: user.email,
        },
      })

      if (userExist) {
        return {
          id: userExist.id,
          name: userExist.name,
          email: userExist.email!,
          avatar_url: userExist.avatar_url!,
          emailVerified: null,
        }
      }

      const prismaUser = await prisma.user.create({
        data: {
          name: user.name,
          avatar_url: user.avatar_url,
          email: user.email,
        },
      })

      return {
        id: prismaUser.id,
        name: prismaUser.name,
        email: prismaUser.email!,
        avatar_url: prismaUser.avatar_url!,
        emailVerified: null,
      }
    },

    async getUser(id) {
      // vamos retornar o usuário a partir do seu id
      const user = await prisma.user.findUnique({
        // findUniqueOrThrow esse método não retorna undefined
        where: {
          id,
        },
      })

      if (!user) {
        return null
      }

      return {
        id: user.id,
        name: user.name,
        email: user.email,
        avatar_url: user.avatar_url!,
        emailVerified: null,
      } // o retorno é um AdapterUser (um formato específico)
    },

    async getUserByEmail(email) {
      // vamos retornar o usuário a partir do seu email
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      })

      if (!user) {
        return null
      }

      return {
        id: user.id,
        name: user.name,
        email: user.email!,
        avatar_url: user.avatar_url!,
        emailVerified: null,
      }
    },

    async getUserByAccount({ providerAccountId, provider }) {
      const account = await prisma.account.findUnique({
        // aqui tem que ser findUnique - esse método (getUserByAccount) é pra saber se o usuário nunca entrou na conta - não podemos usar findUniqueOrThrow para evitar retornar erro
        where: {
          provider_provider_account_id: {
            provider,
            provider_account_id: providerAccountId,
          },
        },
        include: {
          user: true,
        },
      })

      if (!account) {
        return null
      }

      const { user } = account

      return {
        id: user.id,
        name: user.name,
        email: user.email!,
        avatar_url: user.avatar_url!,
        emailVerified: null,
      } // o retorno é um AdapterUser (um formato específico)
    },

    async updateUser(user) {
      const prismaUser = await prisma.user.update({
        where: {
          id: user.id!,
        },
        data: {
          name: user.name,
          email: user.email,
          avatar_url: user.avatar_url,
        },
      })

      return {
        id: prismaUser.id,
        name: prismaUser.name,
        email: prismaUser.email!, // '!' é para informar para o typescript que esse dado vai ser informado
        avatar_url: prismaUser.avatar_url!,
        emailVerified: null,
      } // o retorno é um AdapterUser (um formato específico)
    },

    async linkAccount(account) {
      // quando o usuário loga com mais de um provider
      await prisma.account.create({
        data: {
          user_id: account.userId,
          type: account.type,
          provider: account.provider,
          provider_account_id: account.providerAccountId,
          refresh_token: account.refresh_token,
          access_token: account.access_token,
          expires_at: account.expires_at,
          token_type: account.token_type,
          scope: account.scope,
          id_token: account.id_token,
          session_state: account.session_state,
        },
      })
    },

    async createSession({ sessionToken, userId, expires }) {
      await prisma.session.create({
        data: {
          user_id: userId,
          expires,
          session_token: sessionToken,
        },
      })

      return {
        userId,
        sessionToken,
        expires,
      }
    },

    async getSessionAndUser(sessionToken) {
      const prismaSession = await prisma.session.findUnique({
        where: {
          session_token: sessionToken,
        },
        include: {
          user: true,
        },
      })

      if (!prismaSession) {
        return null
      }

      const { user, ...session } = prismaSession

      return {
        session: {
          userId: session.user_id,
          expires: session.expires,
          sessionToken: session.session_token,
        },
        user: {
          id: user.id,
          name: user.name,
          email: user.email!, // '!' é para informar para o typescript que esse dado vai ser informado
          avatar_url: user.avatar_url!,
          emailVerified: null,
        },
      }
    },

    async updateSession({ sessionToken, userId, expires }) {
      const prismaSession = await prisma.session.update({
        where: {
          session_token: sessionToken,
        },
        data: {
          expires,
          user_id: userId,
        },
      })

      return {
        sessionToken: prismaSession.session_token,
        userId: prismaSession.user_id,
        expires: prismaSession.expires,
      } // o retorno é um AdapterUser (um formato específico)
    },

    async deleteSession(sessionToken) {
      await prisma.session.delete({
        where: {
          session_token: sessionToken,
        },
      })
    },
  }
}
