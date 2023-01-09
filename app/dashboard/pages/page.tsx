import { portfolioPages0ByParentId } from '@/lib/page/page0/getPages0';
import { PaginationProvider } from '@/src/providers/PaginationContext';
import { PortfolioGridPages0 } from '@/ui/GridPage0';
import React, { use } from 'react'

interface Props {
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default function Page(props: Props) {
  const { searchParams } = props
  // console.log('searchParams', searchParams)
  const pages = use(portfolioPages0ByParentId(process.env.NEXT_PUBLIC_SITE_URL as string ))
  return (
    <PaginationProvider>
      <PortfolioGridPages0 pages={pages} />
    </PaginationProvider>
  )
}
