import { Article, CreateArticle } from "@/src/interfaces/article";


export async function portfolioCreateArticle(input: CreateArticle): Promise<Article> {
  return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      mutation HardwareStoreCreateArticle($input: CreateArticle!) {
        portfolioCreateArticle(input: $input) {
          _id
          slug
          parentId
          dataArticle{
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
    .then((result) => result.portfolioCreateArticle)
}
