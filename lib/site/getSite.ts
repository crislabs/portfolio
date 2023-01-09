import { Site } from "@/src/interfaces/site";

export const PET_GET_SITE = `
query HardwareStoreGetSite($id: String!) {
  portfolioGetSite(id: $id) {
    _id
    dataSite {
      name
      description
      type
      dbSite {
        uid
        label
        slug
      }
      infoSite{
        clientId
      }
      imageSite {
        banner {
          src
          alt
        }
        logo {
          src
          alt
        }
        icon {
          src
          alt
        }
      }
    }
    url
  }
}
`;

export async function portfolioGetSite(id: string):Promise<Site> {
   return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: PET_GET_SITE,
      variables: {id: id},
    }),
  })
  .then(res => res.json())
  .then((res)=> res.data)
  .then((result) => result.portfolioGetSite) 
}

export async function portfolioGetSiteByAdmin(id: string):Promise<Site> {
   return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      query HardwareStoreGetSite($id: String!) {
        portfolioGetSite(id: $id) {
          dataSite {
            name
            adminSite{
              sid
            }
          }
        }
      }
      `,
      variables: {id: id},
    }),
  })
  .then(res => res.json())
  .then((res)=> res.data)
  .then((result) => result.portfolioGetSite) 
}

export async function portfolioGetSiteStoreNavigation(id: string):Promise<Site> {
   return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      query HardwareStoreGetSite($id: String!) {
        portfolioGetSite(id: $id) {
          _id
          dataSite {
            name
            description
            type
            imageSite {
              icon {
                src
                alt
              }
              logo {
                src
                alt
              }
            }
          }
          pages{
            _id
            dataPage{
              type
              seoPage{
                title
              }
            }
            slug
            
          }
        }
      }
      `,
      variables: {id: id},
    }),
  })
  .then(res => res.json())
  .then((res)=> res.data)
  .then((result) => result.portfolioGetSite) 
}
