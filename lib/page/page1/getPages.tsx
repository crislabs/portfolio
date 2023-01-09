import { Page } from "@/src/interfaces/page";


export async function portfolioGetPages1(): Promise<Page[]> {
  return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      query HardwareStoreGetPages1{
        portfolioGetPages1{
          _id
          parentId
          siteId
        }
      }
      `,
      variables: {},
    }),
  })
    .then(res => res.json())
    .then((res) => res.data)
    .then((result) => result.portfolioGetPages1)
}

export async function portfolioGetPage1ByParentId(parentId: string): Promise<Page[]> {
  return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      query HardwareStoreGetPages1ByParentId($parentId: String!){
        portfolioGetPages1ByParentId(parentId: $parentId) {
          _id
          dataPage{
            type
            seoPage{
              title
            }
          }
          slug
        }
      }
      `,
      variables: { parentId: parentId },
    }),
  })
    .then(res => res.json())
    .then((res) => res.data)
    .then((result) => result.portfolioGetPages1ByParentId)
}