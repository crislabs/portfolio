import { useRef } from 'react';
import { useLongPress } from 'ahooks';
import Link from 'next/link';
import { useSelection } from '@/src/providers/SelectionContext';
import { getQuery } from '@/src/utils';
import { Article } from '@/src/interfaces/article';


interface Props {
  article?: Article;
}
export function CardArticle({ article }: Props) {
  const { selected, toggle, isSelected } = useSelection();

  const query = getQuery()
  const ref = useRef<HTMLDivElement>(null);
  useLongPress(() => toggle(article?._id!), ref, {
    moveThreshold: { x: 5, y: 5 },
  });
  return (
    <div className="card-dashboard group" >
      <input
        type="checkbox"
        className={`card-dashboard-input ${
          selected.length !== 0 && 'opacity-100'
        }`}
        onChange={() => toggle(article?._id!)}
        checked={isSelected(article?._id!)}
      />
      <div ref={ref} className="">
        <img
          className="h-[12rem] w-full object-cover"
          src={
            article?.dataArticle.seoArticle?.image?.src! ||
            'https://res.cloudinary.com/dqsbh2kn0/image/upload/v1663014890/zawkgpyjvvxrfwp9j7w1.jpg'
          }
          alt={
            article?.dataArticle.seoArticle?.image?.alt! || 'image description'
          }
        />
        <Link
          href={`/dashboard/articles/${article?._id}`}
          className="flex items-center h-[3rem] mx-2 cursor-pointer"
        >
          <h2 className=" text-sm tracking-wide truncate">
            {article?.dataArticle.seoArticle.title}
          </h2>
        </Link>
      </div>
    </div>
  );
}