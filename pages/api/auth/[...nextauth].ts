import { oAUthToDbUser } from "@/lib/user/getUser";
import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google";

// async function refreshAccessToken(token: any) {
//   try {
//     const url =
//       'https://oauth2.googleapis.com/token?' +
//       new URLSearchParams({
//         clientId: process.env.GOOGLE_CLIENT_ID,
//         clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//         grantType: 'refresh_token',
//         refreshToken: token.refreshToken
//       } as any)

//     const response = await fetch(url, {
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//       },
//       method: 'POST'
//     })

//     const refreshedTokens = await response.json()

//     if (!response.ok) {
//       throw refreshedTokens
//     }

//     return {
//       ...token,
//       accessToken: refreshedTokens.access_token,
//       accessTokenExpires: Date.now() + refreshedTokens.expires_in * 1000,
//       refreshToken: refreshedTokens.refresh_token ?? token.refreshToken // Fall back to old refresh token
//     }
//   } catch (error) {
//     console.log(error)

//     return {
//       ...token,
//       error: 'RefreshAccessTokenError'
//     }
//   }
// }

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    }),
    // ...add more providers here
  ],
  session: {
    // strategy: "jwt",
    maxAge: 3600
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // console.log('signIn', { user, account, profile, email, credentials })
      return true
    },
    async redirect({ url, baseUrl }) {
      // console.log('redirect', { url, baseUrl })
      
      return baseUrl
    },
    async session({ session, user, token }) {
      // console.log('session', { session, user, token })
      session.user.accessToken = token.accessToken
      session.user.refreshToken = token.refreshToken
      session.token = token
      // session.user = user
      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      // console.log('jwt', { token, user, account, profile, isNewUser });
      if (account) {
        // token.accessToken = account.access_token;
        switch( account.type ){
          case 'oauth':
            const data = await oAUthToDbUser(user?.email || '', user?.name || '', user?.image|| '', account?.provider|| '')
            token.sid = data.sid
            token.role = data.role
          break
          // case 'credentials':
          //   token.user = user;
          // break
        }
      }
      
      return token
    }
  },
  // jwt: {
  //   secret: process.env.NEXTAUTH_SECRET,
  //   maxAge: 60 * 60 * 24 * 30,
  //   // async encode({token, secret}) {
      
  //   //   return jwt.sign(token as JWT , secret)
  //   // },
  //   // decode() {},
  // },
  
  
}
export default NextAuth(authOptions)