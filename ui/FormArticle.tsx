'use client'
import { portfolioCreateArticle } from "@/lib/article/createArticle";
import { portfolioUpdateArticle } from "@/lib/article/updateArticle";
import { useUI } from "@/src/providers/UIContext";
import { Article, CreateArticle, UpdateArticle } from "@/src/interfaces/article";
import { getQuery, SwalMessage } from "@/src/utils";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useLocalStorageState } from "ahooks";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useForm, SubmitHandler } from 'react-hook-form'

interface Error {
  response: { errors: [{ message: string }] };
}

interface Props {
  article?: Article
}

interface FormValues {
  title: string;
  description: string;
}


export function FormArticle(props: Props) {
  const { article } = props
  const { data: session } = useSession()
  
  
  const searchParams = useSearchParams();

  // console.log('data', session)
  const query = getQuery()
  const {
    toggleSlideOversForm: {
      value,
      actions: { toggle, setLeft },
    },
  } = useUI();
  const queryClient = useQueryClient();
  const { mutate: createPortfolioArticle, isLoading, isError, error } = useMutation({
    mutationFn: async (input: CreateArticle) =>
      await portfolioCreateArticle(input),
    
    onSuccess: async (data) => {
      queryClient.invalidateQueries({ queryKey: ['portfolio-get-listArticles', {first:12}, data.siteId] })
      queryClient.setQueryData<Article[]>(['portfolio-get-articles', data.parentId], (old) => [...old as Article[], data])
      
      await SwalMessage('Article Created ');
      toggle();
    },
    onError:  (err) => {
      console.log('err', err)
      // SwalMessageSiteCreateError(error.response.errors[0].message);
    },
  });
  const { mutate: updatePortfolioArticle } = useMutation({
    mutationFn: async (input: UpdateArticle) =>
      await portfolioUpdateArticle(input),
    
    onSuccess: async (data) => {
      // console.log('data onSuccess', data)
      queryClient.setQueryData<Article>(['portfolio-get-article', query[2]], data)
      queryClient.setQueryData<Article>(['portfolio-get-article-client', query[2]], data)
      
      await SwalMessage('Article Updated');
      toggle();
    },
    onError:  (err) => {
      console.log('err', err)
      // SwalMessageSiteCreateError(error.response.errors[0].message);
    },
  });
  

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: article
      ? {
        title: article?.dataArticle.seoArticle.title,
        description: article?.dataArticle.seoArticle.description,
      }
      : { title: '', description: 'article description' },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const form = {
      ...data,
      title: data.title.trim(),
      description: data.description.trim(),
      siteId: process.env.NEXT_PUBLIC_SITE_URL as string,
      uid: session?.token.sid as string,
    };
    // console.log('form', {...form, parentId: query[3]})
    // createPortfolioPage0({ ...form, parentId: process.env.NEXT_PUBLIC_SITE_URL as string })
    // console.log('form', {...form, parentId: query[3]})
    if (article) {
      updatePortfolioArticle({...form, parentId: article.parentId, id: query[2]})
    } else {
      createPortfolioArticle({...form, parentId: query[3]})

    }
  };
  

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
      <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
        <div className="flex items-start justify-between">
          <Dialog.Title className="text-lg font-medium text-gray-900">New Article</Dialog.Title>
          <div className="ml-3 flex h-7 items-center">
            <button
              type="button"
              className="-m-2 p-2 text-gray-400 hover:text-gray-500"
              onClick={setLeft}
            >
              <span className="sr-only">Close panel</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="mt-8">
          <div className="flow-root">
            <div>
              <div className="sm:rounded-md">
                <div className="bg-white">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6">
                      <label className="label-form">Name</label>
                      <input
                        type="text"
                        autoComplete="off"
                        className="input-form"
                        {...register('title', {
                          required: 'Title required!!',
                          minLength: { value: 2, message: 'min 2 characters' },
                        })}
                      />
                      {errors.title && (
                        <p className="text-red-600 text-sm">This is required!!</p>
                      )}
                    </div>

                    <div className="col-span-6">
                      <label className="label-form">Description</label>
                      <div className="mt-1">
                        <textarea
                          rows={20}
                          className="input-form"
                          {...register('description', {
                            required: 'Title required!!',
                            minLength: { value: 2, message: 'min 2 characters' },
                          })}
                        />
                        {errors.description && (
                          <p className="text-red-600 text-sm">This is required!!</p>
                        )}
                      </div>
                    </div>

                    
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className=" border-t border-gray-200 p-3 bg-gray-200">
        <div className="group-button-form ">
          <button type="submit" className="btn-primary ">
            Save
            {/* {
              isLoading ? '...Saving' : 'Save'
            } */}
          </button>
          <button
            type="button"
            className="btn-default"
            onClick={setLeft}
          // ref={cancelButtonRef}
          >
            Cancel
          </button>
        </div>

      </div>

    </form>
  );
}