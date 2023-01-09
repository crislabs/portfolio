import { CreatePage, Page } from "@/src/interfaces/page";

export async function portfolioCreatePage0(
  input: CreatePage,
): Promise<Page> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      mutation HardwareStoreCreatePage0($input: CreatePage!) {
        portfolioCreatePage0(input: $input) {
          _id
            dataPage{
              type
              seoPage{
                title
                image{
                  src
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
    if (res.err) {
      throw JSON.stringify(res.err);
    }
    return res.data.portfolioCreatePage0
    // .then((res) => )
    // .then((result) => result.portfolioCreatePage0)
 
}

// export async function portfolioCreatePage(
//   input: CreatePage,
// ): Promise<any> {
// try {
  
//   return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       query: `
//       mutation HardwareStoreCreatePage0($input: CreatePage!) {
//         portfolioCreatePage0(input: $input) {
//           _id
//             dataPage{
//               type
//               seoPage{
//                 title
//               }
//             }
//           slug
//           parentId
//         }
//       }
//     `,
//       variables: { input },
//     }),
//   })
//     .then((res) => res.json())
//     .then((res) => res.data)
// } catch (error) {
//   console.log('error', error)
// }

// }