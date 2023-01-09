import { Image, Seo, UpdateDate } from "./site";

export interface Product {
  _id: string;
  dataProduct: DataProduct;
  siteId: string
  parentId: string
  slug: string
}

export interface DataProduct {
  type: string
  mark: Type
  inStock: number
  price: number
  discountPrice: number
  promotion: Type
  details: string
  featured: string
  specs: string
  tags: {
    uid: string
    text: string
    slug: string
  }
  imageProduct: Image[]
  seoProduct: Seo
  updateDate: UpdateDate
}

export interface Type {
  label: string
  slug: string
}

export interface ListProduct {
  page: ConnectionProduct
  pageData: PageDataProduct
}
export interface ConnectionProduct {
  edges: EdgeProduct[]
  pageInfo: PageInfoProduct
}
export interface EdgeProduct {
  cursor: string
  node: Product
}
export interface PageInfoProduct {
  startCursor: string
  endCursor: string
  hasPreviousPage: boolean
  hasNextPage: boolean
}
export interface PageDataProduct {
  count: number
  limit: number
  offset:number
}

export interface CreateProduct {
  name: string
  description: string
  uid: string
  siteId: string
  parentId: string
  type: string
}
export interface UpdateProduct {
  id: string
  name: string
  description: string
  uid: string
  siteId: string
  parentId: string
  type: string
}

export interface UpdateDetailProduct {
  id: string
  text: string
  uid: string
}
export interface UpdateSpecsProduct {
  id: string
  text: string
  uid: string
}