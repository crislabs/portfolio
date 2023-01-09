import { UpdatePage, Page, UpdateImage } from "@/src/interfaces/page";

export async function portfolioUpdatePage0(
  input: UpdatePage,
): Promise<Page> {
  return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      mutation HardwareStoreUpdatePage0($input: UpdatePage!) {
        portfolioUpdatePage0(input: $input) {
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
      variables: { input },
    }),
  })
    .then((res) => res.json())
    .then((res) => res.data)
    .then((result) => result.portfolioUpdatePage0)

}

export async function portfolioUpdateImagePage0(
  input: UpdateImage,
): Promise<Page> {
  return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      mutation HardwareStoreUpdateImagePage0($input: UpdateImage!) {
        portfolioUpdateImagePage0(input: $input) {
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
      variables: { input },
    }),
  })
    .then((res) => res.json())
    .then((res) => res.data)
    .then((result) => result.portfolioUpdateImagePage0)

}
