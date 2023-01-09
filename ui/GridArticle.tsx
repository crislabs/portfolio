'use client';

import { portfolioGetArticlesByParentId } from '@/lib/article/getArticles';
import { portfolioGetPage0 } from '@/lib/page/page0/getPage0';
import { usePagination } from '@/src/providers/PaginationContext';
import { SelectionProvider } from '@/src/providers/SelectionContext';
import { Article } from '@/src/interfaces/article';
import { Page } from '@/src/interfaces/page';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { CardArticle } from './CardArticle';
import { HeadingDashboard } from './HeadingDashboard';
import { HeadingDashboardOption } from './HeadingDashboardOptions';

interface Props {
  articles: Article[]
  page: Page
  parentId: string
}

export function PetGridArticles(props: Props) {
  const { articles, parentId, page } = props;
  const { connectionArgs } = usePagination();
  
  const searchParams = useSearchParams();

  const { data: page0 } = useQuery({
    queryKey: ['portfolio-get-page0', parentId],
    queryFn: () => portfolioGetPage0(parentId),
    initialData: page,
  });
  const { data: blogs } = useQuery({
    queryKey: ['portfolio-get-articles', parentId],
    queryFn: () => portfolioGetArticlesByParentId(parentId),
    initialData: articles,
  });
  // console.log('adoptions', adoptions)
  return (
    <SelectionProvider ids={blogs?.map(data => data._id)}>
      <HeadingDashboard title={page0.dataPage.seoPage.title} page={page0} />

      <HeadingDashboardOption />
      <div className={'grid-sites'}>
        {blogs.map((data, i) => (
          <CardArticle key={i} article={data} />
        ))}
      </div>
      {/* //   
    //   {data.pageData.count > 12 && <PaginationPages pages={data} />} */}

    </SelectionProvider>
  );
}