import { Page } from "@/src/interfaces/page";
import { ListInput } from "@/src/interfaces/site";


export async function portfolioGetPages0(): Promise<Page[]> {
  return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      query HardwareStoreGetPages0{
        portfolioGetPages0{
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
    .then((result) => result.portfolioGetPages0)
}

export async function portfolioPages0ByParentId(parentId: string): Promise<Page[]> {
  return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      query HardwareStoreGetPages0ByParentId($parentId: String!){
        portfolioGetPages0ByParentId(parentId: $parentId) {
          _id
          dataPage{
            type
            seoPage{
              title
              image{
                src
                alt
              }
            }
          }
          slug
        }
      }
      `,
      variables: { parentId },
    }),
  })
    .then(res => res.json())
    .then((res) => res.data)
    .then((result) => result.portfolioGetPages0ByParentId)
}
export async function portfolioPages0ByParentIdByPagination( listInput: ListInput, parentId: string): Promise<Page[]> {
  return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      query HardwareStoreGetPages0ByParentIdByPagination($listInput: ListInput!, $parentId: String!){
        portfolioGetPages0ByParentIdByPagination(listInput: $listInput, parentId: $parentId) {
          _id
          dataPage{
            type
            seoPage{
              title
              image{
                src
                alt
              }
            }
          }
          slug
        }
      }
      `,
      variables: { listInput, parentId },
    }),
  })
    .then(res => res.json())
    .then((res) => res.data)
    .then((result) => result.portfolioGetPages0ByParentIdByPagination)
}
export async function portfolioPages0BySiteId(siteId: string): Promise<Page[]> {
  return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      query HardwareStoreGetPages0BySiteId($siteId: String!){
        portfolioGetPages0BySiteId(siteId: $siteId) {
          _id
        }
      }
      `,
      variables: { siteId: siteId },
    }),
  })
    .then(res => res.json())
    .then((res) => res.data)
    .then((result) => result.portfolioGetPages0BySiteId)
}