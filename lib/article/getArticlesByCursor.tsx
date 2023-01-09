import { Article, ListArticle } from "@/src/interfaces/article";
import { ConnectionArgs } from "@/src/interfaces/site";


export async function portfolioGetArticlesWithCursorBySiteId(args:ConnectionArgs, siteId: string): Promise<ListArticle> {
  return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      query HardwareStoreGetArticlesWithCursorBySiteId($args:ConnectionArgs!, $siteId: String!){
        portfolioGetArticlesWithCursorBySiteId(args: $args, siteId: $siteId){
         page{
          pageInfo{
            startCursor
            endCursor
            hasNextPage
            hasPreviousPage
          }
          edges{
            cursor
            node{
              _id
              slug
              dataArticle{
                seoArticle{
                  title
                  image{
                    src
                    alt
                  }
                }
              }
            }
          }
        }
          pageData{
            count
            limit
            offset
          }
        }
      }
      `,
      variables: { args, siteId },
    }),
  })
    .then(res => res.json())
    .then((res) => res.data)
    .then((result) => result.portfolioGetArticlesWithCursorBySiteId)
}
