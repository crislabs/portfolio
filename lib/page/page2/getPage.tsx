import { Page } from "@/src/interfaces/page";


export async function portfolioGetPage2(id: string): Promise<Page> {
  return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      query HardwareStoreGetPage2( $id: String! ){
        portfolioGetPage2( id: $id ) {
          _id
          slug
          parentId
          dataPage{
            type
            seoPage{
              title
              description

            }
          }
        }
      }
      `,
      variables: { id },
    }),
  })
    .then(res => res.json())
    .then((res) => res.data)
    .then((result) => result.portfolioGetPage2)
}

