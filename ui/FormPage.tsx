'use client'
import { portfolioCreatePage0 } from "@/lib/page/page0/createPage0";
import { portfolioUpdateImagePage0, portfolioUpdatePage0 } from "@/lib/page/page0/updatePage0";
import { portfolioCreatePage1 } from "@/lib/page/page1/createPage";
import { portfolioUpdatePage1 } from "@/lib/page/page1/updatePage";
import { portfolioCreatePage2 } from "@/lib/page/page2/createPage";
import { portfolioUpdatePage2 } from "@/lib/page/page2/updatePage";
import { portfolioCreatePage3 } from "@/lib/page/page3/createPage";
import { portfolioUpdatePage3 } from "@/lib/page/page3/updatePage";
import { useUI } from "@/src/providers/UIContext";
import { CreatePage, Page, UpdateImage, UpdatePage } from "@/src/interfaces/page";

import { getQuery, SwalMessage, typeCategoryPet, typeCategoryPortfolio, typePagePet, typePagePortfolio } from "@/src/utils";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import React, { ChangeEvent } from "react";
import { useForm, SubmitHandler } from 'react-hook-form'

import axios, { AxiosError } from 'axios';
import Swal from "sweetalert2";

interface Error {
  response: { errors: [{ message: string }] };
}

interface Props {
  page?: Page
}

interface FormValues {
  title: string;
  description: string;
  type: string;
}


export function FormPage(props: Props) {
  const { page } = props
  const { data: session } = useSession()
  const searchParams = useSearchParams();
  const query = getQuery()
  const {
    toggleSlideOversForm: {
      value,
      actions: { toggle, setLeft },
    },
  } = useUI();
  const queryClient = useQueryClient();
  const { mutate: createPetPage0, isLoading, isError, error } = useMutation({
    mutationFn: async (input: CreatePage) =>
      await portfolioCreatePage0(input),

    onSuccess: async (data) => {
      queryClient.setQueryData<Page[]>(['portfolio-get-pages0', data.parentId], (old) => [...old as Page[], data])
      await SwalMessage(' Page Created');
      toggle();
    },
    onError: (err) => {
      console.log('err', err)
      // SwalMessageSiteCreateError(error.response.errors[0].message);
    },
  });
  const { mutate: updatePetPage0 } = useMutation({
    mutationFn: async (input: UpdatePage) =>
      await portfolioUpdatePage0(input),

    onSuccess: async (data) => {
      queryClient.setQueryData<Page>(['portfolio-get-page0', query[3]], data)
      // queryClient.setQueryData<Page[]>(['portfolio-get-pages0', data.parentId], (old) => [...old as Page[], data])
      await SwalMessage('Page Updated');
      toggle();
    },
    onError: (err) => {
      console.log('err', err)
      // SwalMessageSiteCreateError(error.response.errors[0].message);
    },
  });
  const { mutate: createPetPage1 } = useMutation({
    mutationFn: async (input: CreatePage) =>
      await portfolioCreatePage1(input),

    onSuccess: async (data) => {
      queryClient.setQueryData<Page[]>(['portfolio-get-pages1', data.parentId], (old) => [...old as Page[], data])
      await SwalMessage(' Page Created');
      toggle();
    },
    onError: (err) => {
      console.log('err', err)
      // SwalMessageSiteCreateError(error.response.errors[0].message);
    },
  });
  const { mutate: createPetPage2 } = useMutation({
    mutationFn: async (input: CreatePage) =>
      await portfolioCreatePage2(input),

    onSuccess: async (data) => {
      queryClient.setQueryData<Page[]>(['portfolio-get-pages2', data.parentId], (old) => [...old as Page[], data])
      await SwalMessage(' Page Created');
      toggle();
    },
    onError: (err) => {
      console.log('err', err)
      // SwalMessageSiteCreateError(error.response.errors[0].message);
    },
  });
  const { mutate: createPetPage3 } = useMutation({
    mutationFn: async (input: CreatePage) =>
      await portfolioCreatePage3(input),

    onSuccess: async (data) => {
      queryClient.setQueryData<Page[]>(['portfolio-get-pages3', data.parentId], (old) => [...old as Page[], data])
      await SwalMessage(' Page Created');
      toggle();
    },
    onError: (err) => {
      console.log('err', err)
      // SwalMessageSiteCreateError(error.response.errors[0].message);
    },
  });
  const { mutate: updatePetPage1 } = useMutation({
    mutationFn: async (input: UpdatePage) =>
      await portfolioUpdatePage1(input),

    onSuccess: async (data) => {
      queryClient.setQueryData<Page>(['portfolio-get-page1', query[3]], data)
      // queryClient.setQueryData<Page[]>(['portfolio-get-pages0', data.parentId], (old) => [...old as Page[], data])
      await SwalMessage('Page Updated');
      toggle();
    },
    onError: (err) => {
      console.log('err', err)
      // SwalMessageSiteCreateError(error.response.errors[0].message);
    },
  });
  const { mutate: updatePetPage2 } = useMutation({
    mutationFn: async (input: UpdatePage) =>
      await portfolioUpdatePage2(input),

    onSuccess: async (data) => {
      queryClient.setQueryData<Page>(['portfolio-get-page2', query[3]], data)
      // queryClient.setQueryData<Page[]>(['portfolio-get-pages0', data.parentId], (old) => [...old as Page[], data])
      await SwalMessage('Page Updated');
      toggle();
    },
    onError: (err) => {
      console.log('err', err)
      // SwalMessageSiteCreateError(error.response.errors[0].message);
    },
  });
  const { mutate: updatePetPage3 } = useMutation({
    mutationFn: async (input: UpdatePage) =>
      await portfolioUpdatePage3(input),

    onSuccess: async (data) => {
      queryClient.setQueryData<Page>(['portfolio-get-page3', query[3]], data)
      // queryClient.setQueryData<Page[]>(['portfolio-get-pages0', data.parentId], (old) => [...old as Page[], data])
      await SwalMessage('Page Updated');
      toggle();
    },
    onError: (err) => {
      console.log('err', err)
      // SwalMessageSiteCreateError(error.response.errors[0].message);
    },
  });
  const { mutate: updatePortfolioImagePage0 } = useMutation({
    mutationFn: async (input: UpdateImage) =>
      await portfolioUpdateImagePage0(input),

    onSuccess: async (data) => {
      queryClient.setQueryData<Page>(['portfolio-get-page0', query[3]], data)
      // queryClient.setQueryData<Page[]>(['portfolio-get-pages0', data.parentId], (old) => [...old as Page[], data])
      await SwalMessage('Page Image Updated');
      // toggle();
    },
    onError: (err) => {
      console.log('err', err)
      // SwalMessageSiteCreateError(error.response.errors[0].message);
    },
  });
  // console.log(isLoading);
  // {
  //   isError &&
  //   console.log('isError', error)
  // }

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: page
      ? {
        title: page?.dataPage.seoPage.title,
        description: page?.dataPage.seoPage.description,
        type: page?.dataPage.type,
      }
      : { title: '', description: 'page description', type: 'page' },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const form = {
      ...data,
      title: data.title.trim(),
      description: data.description.trim(),
      siteId: process.env.NEXT_PUBLIC_SITE_URL as string,
      uid: session?.token.sid as string,
    };
    {
      if (page) {
        if (query.length === 4) {
          query[2] === 'page0' && updatePetPage0({ ...form, id: query[3], parentId: query[3] });
          query[2] === 'page1' && updatePetPage1({ ...form, id: query[3], parentId: query[3] })
          query[2] === 'page2' && updatePetPage2({ ...form, id: query[3], parentId: query[3] })
          query[2] === 'page3' && updatePetPage3({ ...form, id: query[3], parentId: query[3] })
        }
      } else {
        if (query.length === 4) {
          query[2] === 'page0' && createPetPage1({ ...form, parentId: query[3] })
          query[2] === 'page1' && createPetPage2({ ...form, parentId: query[3] })
          query[2] === 'page2' && createPetPage3({ ...form, parentId: query[3] })
        }
        query.length === 2 && createPetPage0({ ...form, parentId: process.env.NEXT_PUBLIC_SITE_URL as string })
      }

    }
  };

  const onFileSelected = async ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (!target.files || target.files.length === 0) {
      return;
    }
    try {
      for (const file of target.files) {
        const formData = new FormData();
        formData.append('photo_url', file)
        formData.append('parentId', '123456')
        formData.append('siteId', query[2])
        formData.append('type', 'page')
        // console.log('formData', formData)
        
        const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/upload/file`, formData)
        updatePortfolioImagePage0({id: query[3], type: 'page',
        uid: session?.token.sid as string,
        images: {
          src: data.url,
          alt: 'alt from image'

        } })
        // setValue('data.image', [...getValues('data.image'), {uid: uuidv3(), src: data.url, alt:`description image of the ${product?.data.name}`}], { shouldValidate: true })
        // updateProductImage({id: product?._id!, inputImage: getValues('data.image'), type: product?.type!, uid: session?.user.sid!})

      }
    } catch (error) {
      // const err = error as AxiosError
      // const { message } = err.response?.data as {message: string}
      // Swal.fire({
      //   icon: 'error',
      //   title: 'Oops...',
      //   text: message,
      //   footer: '<a href="">Why do I have this issue?</a>'
      // })
    }
  }
  const uploadURL = async () => {
    toggle()
    const { value: url } = await Swal.fire({
      input: 'url',
      inputAutoTrim: true,
      inputLabel: 'URL Image',
      inputPlaceholder: 'Enter the URL',
      inputAttributes: {
        autocomplete: 'off',
      },
    })
if (url) {
  
  try {
    const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/upload/file-url`, {photo_url: url, siteId: query[3], parentId: query[3], type: 'page'})
    // setValue('data.image', [...getValues('data.image'), { uid: uuidv3(), src: data.url, alt: `description image of the ${product?.data.name}` }], { shouldValidate: true })
    // updateProductImage({ id: product?._id!, inputImage: getValues('data.image'), type: product?.type!, uid: session?.user.sid! })
    updatePortfolioImagePage0({id: query[3], type: 'page',
        uid: session?.token.sid as string,
        images: {
          src: data.url,
          alt: 'alt from image'

        } })
  } catch (error) {
    const err = error as AxiosError
    const { message } = err.response?.data as { message: string }
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: message,
      footer: '<a href="">Why do I have this issue?</a>'
    })
  }
}}

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
      <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
        <div className="flex items-start justify-between">
          <Dialog.Title className="text-lg font-medium text-gray-900">{page ? 'Edit Page' : 'New Page'}</Dialog.Title>
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
                      <label className="label-form">Title</label>
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
                          rows={3}
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
                    <div className="col-span-6">
                      <h2 className="contents text-sm font-medium text-gray-700">
                        Type{' '}
                      </h2>
                      <div className="grid grid-cols-2">

                        <React.Fragment>
                          {
                            searchParams.get('type') === 'page' &&
                            typePagePortfolio.map((data) => (
                              <div
                                className="flex items-center my-2"
                                key={data.label}
                              >
                                <input
                                  type="radio"
                                  id={data.value}
                                  value={data.value}
                                  {...register('type', { required: true })}
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  onChange={({ target }) =>
                                    setValue('type', target.value, {
                                      shouldValidate: true,
                                    })
                                  }
                                />
                                <label className="ml-3 label-form">
                                  {data.label}
                                </label>
                              </div>
                            ))}
                          {
                            searchParams.get('type') === 'category' &&
                            typeCategoryPortfolio.map((data) => (
                              <div
                                className="flex items-center my-2"
                                key={data.label}
                              >
                                <input
                                  type="radio"
                                  id={data.value}
                                  value={data.value}
                                  {...register('type', { required: true })}
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  onChange={({ target }) =>
                                    setValue('type', target.value, {
                                      shouldValidate: true,
                                    })
                                  }
                                />
                                <label className="ml-3 label-form">
                                  {data.label}
                                </label>
                              </div>
                            ))}
                        </React.Fragment>


                      </div>
                    </div>

                    {
                      page &&
                    <div className="col-span-6 space-y-2">
                    <label className="label-form">Image for SEO</label>

                      <div className="flex flex-col justify-center rounded-md border-2 border-dashed border-gray-300 p-2">

                        <div className="space-y-1 text-center">
                          <svg
                            className="mx-auto h-8 w-8 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <div className="flex text-sm text-gray-600 flex-col">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500 mb-1"
                            >
                              <span>Upload a file</span>

                              <input id="file-upload" name="file-upload" accept=".png, .jpeg, .jpg, .webp" type="file" className="sr-only" onChange={onFileSelected} />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-500">PNG, JPG, JPEG up to 5MB</p>
                        </div>
                        <button className="btn-primary py-1 text-center justify-center" type='button' onClick={() => uploadURL()}>url</button>
                      </div>
                    </div>

}
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
            {
              isLoading ? '...Saving' : 'Save'
            }
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