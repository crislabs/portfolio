import { portfolioGetArticleBySlug } from '@/lib/article/getArticle';
import { portfolioGetArticlesBySiteId } from '@/lib/article/getArticles';
import { ArticleClient } from '@/ui/ArticleClient';
import React, { use } from 'react'

interface Props {
  searchParams?: { [key: string]: string | string[] | undefined };
  params: { slug: string }
}


export default function Page(props: Props) {
  const { searchParams, params } = props
  const article = use(portfolioGetArticleBySlug(process.env.NEXT_PUBLIC_SITE_URL as string, params.slug))
  // console.log('article', article)
  return (
    <ArticleClient article={article}/>
  )
}

export async function generateStaticParams() {
  const posts = await portfolioGetArticlesBySiteId(process.env.NEXT_PUBLIC_SITE_URL as string);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}