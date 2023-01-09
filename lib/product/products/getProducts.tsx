import { Product } from "@/src/interfaces/product";


export async function portfolioGetProductsByParentId(parentId: string): Promise<Product[]> {
  return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      query HardwareStoreGetProductsByParentId($parentId: String!) {
        portfolioGetProductsByParentId(parentId: $parentId) {
          _id
          slug
          parentId
          dataProduct{
            seoProduct{
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
    .then((result) => result.portfolioGetProductsByParentId)
}
