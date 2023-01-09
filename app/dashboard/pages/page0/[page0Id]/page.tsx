import { portfolioGetArticlesByParentId } from '@/lib/article/getArticles';
import { portfolioGetPage0 } from '@/lib/page/page0/getPage0'
import { portfolioPages0BySiteId } from '@/lib/page/page0/getPages0';
import { portfolioGetPage1ByParentId } from '@/lib/page/page1/getPages';
import { PaginationProvider } from '@/src/providers/PaginationContext';
import { Article } from '@/src/interfaces/article';
import { Page } from '@/src/interfaces/page';
import { Product } from '@/src/interfaces/product';
// import { PetGridAdoptions } from '@/ui/GridAdoption';
import { PetGridArticles } from '@/ui/GridArticle';
// import { PetGridPages1 } from '@/ui/GridPage1';
import React, { use } from 'react'

interface Props {
  searchParams?: { [key: string]: string | string[] | undefined };
  params: { page0Id: string }
}

let adoptions: Product[] = []
let articles: Article[] = []
let pages: Page[] = []

export default function Page0(props: Props) {
  const { searchParams, params } = props
  const page = use(portfolioGetPage0(params.page0Id))
  // if (page.dataPage.type === 'adoption') {
  //   adoptions = use(portfolioGetAdoptionsByParentId(params.page0Id))
  // }
  if (page.dataPage.type === 'blog') {
    articles = use(portfolioGetArticlesByParentId(params.page0Id))
  }
  if (page.dataPage.type === 'category') {
    pages = use(portfolioGetPage1ByParentId(params.page0Id))
  }

  return (
    <PaginationProvider>
      {/* {
        page.dataPage.type === 'adoption' && 
        <PetGridAdoptions products={adoptions} page={page} parentId={params.page0Id}  />
      }
      {
        page.dataPage.type === 'category' && 
        <PetGridPages1 pages={pages} parentId={params.page0Id} page = {page}/>
      } */}
      {
        page.dataPage.type === 'blog' && 
        <PetGridArticles articles={articles} parentId={params.page0Id} page = {page}/>
      }
    </PaginationProvider>
  )
}

export async function generateStaticParams() {
  const pages = await portfolioPages0BySiteId(process.env.NEXT_PUBLIC_SITE_URL as string);
  return pages.map((page) => ({
    page0Id: page._id,
  }));
}