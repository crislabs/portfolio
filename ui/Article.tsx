'use client'

import React from 'react';
import Markdown from 'markdown-to-jsx';
import { Article } from '@/src/interfaces/article';
import { HeadingDashboard } from './HeadingDashboard';
import { useQuery } from '@tanstack/react-query';
import { portfolioGetArticle } from '@/lib/article/getArticle';
import { useLocalStorageState } from 'ahooks';
import { MarkdownPreview } from './ArticleClient';



interface Props {
  article: Article
  id: string
}




export function Post(props: Props) {
  const { article, id } = props
  const { data: post } = useQuery({
    queryKey: ['portfolio-get-article', id],
    queryFn: () => portfolioGetArticle(id),
    initialData: article,
  });
  // const [ content ] = useLocalStorageState<string | undefined>(
  //   post.slug as string
  // );
  // console.log('content', content)
  return (
    <React.Fragment>
      <HeadingDashboard title='Article Editor' article={post} />
      <article className="max-w-2xl px-6 py-6 mx-auto space-y-12  text-gray-900">
        <div className="w-full mx-auto space-y-4 text-center">

          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            {post.dataArticle.seoArticle.title}
          </h1>

        </div>
        <div className="text-gray-800 prose max-w-none prose-pre:p-0 prose-pre:bg-inherit">
          {/* <Markdown>
            {post.dataArticle.content || ''}
          </Markdown> */}
          <MarkdownPreview markdown={post.dataArticle.content || ''}/>
        </div>

      </article>
    </React.Fragment>
  );
}