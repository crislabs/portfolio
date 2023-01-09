import { Article } from "@/src/interfaces/article";


export async function portfolioGetArticlesBySiteId(siteId: string): Promise<Article[]> {
  return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      query HardwareStoreGetArticlesBySiteId($siteId: String!) {
        portfolioGetArticlesBySiteId(siteId: $siteId) {
          slug
        }
      }
      `,
      variables: { siteId },
    }),
  })
    .then(res => res.json())
    .then((res) => res.data)
    .then((result) => result.portfolioGetArticlesBySiteId)
}

export async function portfolioGetArticlesByParentId(parentId: string): Promise<Article[]> {
  return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      query HardwareStoreGetArticlesByParentId($parentId: String!) {
        portfolioGetArticlesByParentId(parentId: $parentId) {
          _id
          slug
          parentId
          dataArticle{
            seoArticle{
              title
              image{
                src
              }
            }
          }
        }
      }
      `,
      variables: { parentId },
    }),
  })
    .then(res => res.json())
    .then((res) => res.data)
    .then((result) => result.portfolioGetArticlesByParentId)
}
