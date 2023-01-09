import { Article, UpdateArticle, UpdateContentArticle } from "@/src/interfaces/article";


export async function portfolioUpdateArticle(input: UpdateArticle): Promise<Article> {
  return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      mutation HardwareStoreUpdateArticle($input: UpdateArticle!) {
        portfolioUpdateArticle(input: $input) {
          _id
          slug
          parentId
          dataArticle{
            content
            seoArticle{
              title
              description
              image{
                src
              }
            }
          }
        }
      }
      `,
      variables: { input },
    }),
  })
    .then(res => res.json())
    .then((res) => res.data)
    .then((result) => result.portfolioUpdateArticle)
}
export async function portfolioUpdateContentArticle(input: UpdateContentArticle): Promise<Article> {
  return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      mutation HardwareStoreUpdateContentArticle($input: UpdateContentArticle!) {
        portfolioUpdateContentArticle(input: $input) {
          _id
          slug
          parentId
          dataArticle{
            content
            seoArticle{
              title
              description
              image{
                src
              }
            }
          }
        }
      }
      `,
      variables: { input },
    }),
  })
    .then(res => res.json())
    .then((res) => res.data)
    .then((result) => result.portfolioUpdateContentArticle)
}
