import { UpdatePage, Page } from "@/src/interfaces/page";

export async function portfolioUpdatePage3(
  input: UpdatePage,
): Promise<Page> {
  return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      mutation HardwareStoreUpdatePage3($input: UpdatePage!) {
        portfolioUpdatePage3(input: $input) {
          _id
            dataPage{
              type
              seoPage{
                title
                description
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
    .then((result) => result.portfolioUpdatePage3)

}
