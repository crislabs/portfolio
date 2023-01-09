'use client';

import { portfolioPages0ByParentId } from '@/lib/page/page0/getPages0';
import { usePagination } from '@/src/providers/PaginationContext';
import { SelectionProvider } from '@/src/providers/SelectionContext';
import { ListPage, Page } from '@/src/interfaces/page';
import { useQuery } from '@tanstack/react-query';

import { useSearchParams } from 'next/navigation';
import { CardPage0 } from './CardPage0';
import { HeadingDashboard } from './HeadingDashboard';
import { HeadingDashboardOption } from './HeadingDashboardOptions';

interface Props {
  pages: Page[]
}

export function PortfolioGridPages0(props: Props) {
  const { pages, } = props;
  // console.log('pages', pages)
  const { connectionArgs } = usePagination();
  // const query = getQuery()
  const searchParams = useSearchParams();
  const { data: pages0 } = useQuery({
    queryKey: ['portfolio-get-pages0', process.env.NEXT_PUBLIC_SITE_URL as string],
    queryFn: () => portfolioPages0ByParentId(process.env.NEXT_PUBLIC_SITE_URL as string),
    initialData: pages,
  });
  return (
    <SelectionProvider ids={pages0?.map(data => data._id)}>
      <HeadingDashboard title={"pages0"} />
      <HeadingDashboardOption />
      <div className={'grid-sites'}>
        {pages0.map((data, i) => (
          <CardPage0 key={i} page={data} />
        ))}
      </div>
      {/* //   
    //   {data.pageData.count > 12 && <PaginationPages pages={data} />} */}

    </SelectionProvider>
  );
}