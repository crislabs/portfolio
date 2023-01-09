import { portfolioGetArticle } from '@/lib/article/getArticle';
import { Post } from '@/ui/Article';
import React, { use } from 'react'

interface Props {
  searchParams?: { [key: string]: string | string[] | undefined };
  params: { articleId: string }
}

export default function Page(props: Props) {
  const { params } = props
  const article = use(portfolioGetArticle(params.articleId))
  // console.log('article', article)
  return (
    <Post article={article} id={params.articleId} />
    // <AdoptionOverviewsPet adoption={adoption} />
  )
}
