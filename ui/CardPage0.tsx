import { useRef } from 'react';
import { useLongPress } from 'ahooks';
import Link from 'next/link';
import { useSelection } from '@/src/providers/SelectionContext';
import { getQuery } from '@/src/utils';
import { EdgePage, Page } from '@/src/interfaces/page';


interface Props {
  page?: Page;
}
export function CardPage0({ page }: Props) {
  const { selected, toggle, isSelected } = useSelection();

  const query = getQuery()
  const ref = useRef<HTMLDivElement>(null);
  useLongPress(() => toggle(page?._id!), ref, {
    moveThreshold: { x: 5, y: 5 },
  });
  return (
    <div className="card-dashboard group" >
      <input
        type="checkbox"
        className={`card-dashboard-input ${
          selected.length !== 0 && 'opacity-100'
        }`}
        onChange={() => toggle(page?._id!)}
        checked={isSelected(page?._id!)}
      />
      <div ref={ref} className="">
        <img
          className="h-[12rem] w-full object-cover"
          src={
            page?.dataPage.seoPage?.image?.src! ||
            'https://res.cloudinary.com/dqsbh2kn0/image/upload/v1663014890/zawkgpyjvvxrfwp9j7w1.jpg'
          }
          alt={
            page?.dataPage.seoPage?.image?.alt! || 'image description'
          }
        />
        <Link
          href={`/dashboard/pages/page0/${page?._id}?type=${page?.dataPage.type}`}
          className="flex items-center h-[3rem] mx-2 cursor-pointer"
        >
          <h2 className=" text-sm tracking-wide truncate">
            {page?.dataPage.seoPage.title}
          </h2>
        </Link>
      </div>
    </div>
  );
}