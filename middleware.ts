import { withAuth } from "next-auth/middleware"
export default withAuth(
  async function middleware(req) {
  },
  {
    callbacks: {
      authorized: ({req, token }) => ['63b7004298655500e5009a91'].includes(token?.sid as string),
    },
  }
)

export const config = { matcher: ["/dashboard/:path*"] }