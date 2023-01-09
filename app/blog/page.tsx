
import { portfolioGetArticlesWithCursorBySiteId } from '@/lib/article/getArticlesByCursor'
import { GridArticleClient } from '@/ui/GridArticleClient'
import React, { use } from 'react'

export default function Page() {
  const articles = use(portfolioGetArticlesWithCursorBySiteId({first:12}, process.env.NEXT_PUBLIC_SITE_URL as string))
  return (
    <GridArticleClient listArticles={articles} />
  )
}
