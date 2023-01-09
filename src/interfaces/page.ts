// import { Article } from "../article/article.interface";
// import { Product } from "../product/product.interface";
// import { Food } from "./product/food.interface";
import { Pet } from "./pet";
import { Product } from "./product";
import { Image, Seo } from "./site";

export interface Page {
  _id: string;
  dataPage: DataPage;
  slug: string;
  parentId: string;
  // articles: Article[];
  siteId: string
  pages?: Page[];
  products?: Product[]
  adoptions?: Product[]
  pets?: any[];
}

interface DataPage {
  type: string
  icon?: Image;
  seoPage: Seo;
}

export interface CreatePage {
  title: string
  description: string
  type: string
  parentId: string
  siteId: string
  uid: string
}
export interface UpdatePage {
  id:string
  title: string
  description: string
  type: string
  parentId: string
  siteId: string
}
export interface UpdateImage {
  id:string
  type:string
  uid: string
  images: {
    src: string
    alt: string
  }
}

export interface DeletePages {
  ids:string[]
}

export interface ListPage {
  page: ConnectionPage
  pageData: PageDataPage
}
export interface ConnectionPage {
  edges: EdgePage[]
  pageInfo: PageInfoPage
}
export interface EdgePage {
  cursor: string
  node: Page
}
export interface PageInfoPage {
  startCursor: string
  endCursor: string
  hasPreviousPage: boolean
  hasNextPage: boolean
}
export interface PageDataPage {
  count: number
  limit: number
  offset:number
}
