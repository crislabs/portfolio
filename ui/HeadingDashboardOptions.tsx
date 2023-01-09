

import { portfolioDeletePages0 } from '@/lib/page/page0/deletePage0';
import { portfolioDeletePages1 } from '@/lib/page/page1/deletePage';
// import { portfolioDeleteAdoptions } from '@/lib/product/adoptions/deleteAdoption';
import { usePagination } from '@/src/providers/PaginationContext';
import { useSelection } from '@/src/providers/SelectionContext';
import { Page } from '@/src/interfaces/page';
import { Product } from '@/src/interfaces/product';
import { getQuery } from '@/src/utils';
import { TrashIcon } from '@heroicons/react/24/outline';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import Swal from 'sweetalert2';

export function HeadingDashboardOption() {
  const { selected, allSelected, toggleAll, unSelectAll } = useSelection();
  const query = getQuery();
  const { connectionArgs } = usePagination()

  const queryClient = useQueryClient();
  const searchParams = useSearchParams();

  const { mutate: deletePages0Pet } = useMutation(
    {
      mutationFn: async (ids: string[]) => await portfolioDeletePages0(ids),
      onSuccess:  (ids) => {
        queryClient.setQueryData<Page[]>(['portfolio-get-pages0', process.env.NEXT_PUBLIC_SITE_URL as string], (old) => old?.filter(data => !ids.includes(data._id)))
        // queryClient.invalidateQueries(['portfolio-get-site', process.env.NEXT_PUBLIC_SITE_URL as string])
        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success',
          timer: 1000,
          showConfirmButton: false,
        })
        unSelectAll()
      },
      onError: (error: { response: { errors: [{ message: string }] } }) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.errors[0].message,
          footer: '<a href="">Why do I have this issue?</a>',
        });
      },
    }
  );
  const { mutate: deletePages1Pet } = useMutation(
    {
      mutationFn: async (ids: string[]) => await portfolioDeletePages1(ids),
      onSuccess:  (ids) => {
        queryClient.setQueryData<Page[]>(['portfolio-get-pages1', query[3]], (old) => old?.filter(data => !ids.includes(data._id)))
        // queryClient.invalidateQueries(['portfolio-get-site', process.env.NEXT_PUBLIC_SITE_URL as string])
        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success',
          timer: 1000,
          showConfirmButton: false,
        })
        unSelectAll()
      },
      onError: (error: { response: { errors: [{ message: string }] } }) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.errors[0].message,
          footer: '<a href="">Why do I have this issue?</a>',
        });
      },
    }
  );
  // const { mutate: deleteAdoptionsPet } = useMutation(
  //   {
  //     mutationFn: async (ids: string[]) => await portfolioDeleteAdoptions(ids),
  //     onSuccess:  (ids) => {
  //       queryClient.setQueryData<Product[]>(['portfolio-get-adoptions', query[3]], (old) => old?.filter(data => !ids.includes(data._id)))
  //       // queryClient.invalidateQueries(['portfolio-get-site', process.env.NEXT_PUBLIC_SITE_URL as string])
  //       Swal.fire({
  //         title: 'Deleted!',
  //         text: 'Your file has been deleted.',
  //         icon: 'success',
  //         timer: 1000,
  //         showConfirmButton: false,
  //       })
  //       unSelectAll()
  //     },
  //     onError: (error: { response: { errors: [{ message: string }] } }) => {
  //       Swal.fire({
  //         icon: "error",
  //         title: "Oops...",
  //         text: error.response.errors[0].message,
  //         footer: '<a href="">Why do I have this issue?</a>',
  //       });
  //     },
  //   }
  // );

  const deleteHandle = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        {
          // query.length === 4 && searchParams.get('type') === 'adoption' && deleteAdoptionsPet(selected)
        }
        {
          query.length === 4 && searchParams.get('type') === 'category' && deletePages1Pet(selected)
        }
        {
          query.length === 2  && deletePages0Pet(selected)
        }
        
      }
    });
  };
  return (
    <div
      className={` ${
        selected.length !== 0 ? 'opacity-100' : 'hidden  -translate-y-6 '
      } `}
    >
      <div className="mx-auto max-w-7xl pt-3 ">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex w-0 flex-1 items-center">
          <input
            type="checkbox"
            className="h-5 w-5  rounded border-gray-400 text-indigo-600 focus:ring-indigo-500 bg-white"
            onChange={() => toggleAll}
            checked={allSelected}
            onClick={toggleAll}
          />
            
            <p className="ml-2 text-sm font-medium">Select All</p>
          </div>

          <span
            className={`block opacity-100 transition ease-in-out delay-150`}
            >
            <button className="btn-default" onClick={() => deleteHandle()}>
              <TrashIcon className="h-5 w-5" aria-hidden="true" />
              <p className="">({selected.length})</p>
            </button>
          </span>
        </div>
      </div>
      </div>

  );
}