import { Page } from "@/src/interfaces/page";


export async function portfolioGetPage0(id: string): Promise<Page> {
  return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      query HardwareStoreGetPage0($id: String!){
        portfolioGetPage0(id: $id){
          _id
            dataPage{
              type
              seoPage{
                title
                description
                image{
                  src
                  alt
                }
              }
            }
          slug
          parentId
        }
      }
      `,
      variables: { id },
    }),
  })
    .then(res => res.json())
    .then((res) => res.data)
    .then((result) => result.portfolioGetPage0)
}

