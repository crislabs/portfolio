import { Product, UpdateDetailProduct, UpdateProduct } from "@/src/interfaces/product";


export async function portfolioUpdateProduct(input: UpdateProduct): Promise<Product> {
  return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      mutation HardwareStoreUpdateProduct($input: UpdateProduct!) {
        portfolioUpdateProduct(input: $input) {
          _id
          slug
          parentId
          dataProduct{
            details
            specs
            imageProduct{
              src
              alt
            }   
            seoProduct{
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
    .then((result) => result.portfolioUpdateProduct)
}

export async function portfolioUpdateDetailProduct(input: UpdateDetailProduct): Promise<Product> {
  return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      mutation HardwareStoreUpdateDetailProduct($input: UpdateDetailProduct!) {
        portfolioUpdateDetailProduct(input: $input) {
          _id
          slug
          parentId
          dataProduct{
            specs
            details
            imageProduct{
              src
              alt
            }
            seoProduct{
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
    .then((result) => result.portfolioUpdateDetailProduct)
}
export async function portfolioUpdateSpecsProduct(input: UpdateDetailProduct): Promise<Product> {
  return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      mutation HardwareStoreUpdateSpecsProduct($input: UpdateSpecsProduct!) {
        portfolioUpdateSpecsProduct(input: $input) {
          _id
          slug
          parentId
          dataProduct{
            details
            specs
            imageProduct{
              src
              alt
            }
            seoProduct{
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
    .then((result) => result.portfolioUpdateSpecsProduct)
}
