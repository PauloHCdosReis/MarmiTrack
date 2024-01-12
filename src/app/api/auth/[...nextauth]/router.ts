import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const nextAuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: { label: 'username', type: 'text' },
        password: { label: 'password', type: 'password' },
      },

      async authorize(credentials, req) {
        const response = await fetch('', {
          headers: {
            'Content-Type:': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            username: credentials?.username,
            password: credentials?.password,
          }),
        })

        const user = await response.json()

        if (user && response.ok) {
          return user
        }

        return null
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
}

const handler = NextAuth({})

export { handler as GET, handler as POST }
