'use client'
/* This example requires Tailwind CSS v3.0+ */
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, CodeBracketIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { getQuery } from '@/src/utils'
import Link from 'next/link'
import { Site } from '@/src/interfaces/site'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Cog6ToothIcon } from '@heroicons/react/24/solid'
import Swal from 'sweetalert2'

const navigation = [
  { name: 'About Me', href: '#' },
  { name: 'Projects', href: '#' },
  { name: 'Blog', href: '/blog' }
]

interface Props {
  site: Site;
}



export function Header(props: Props) {
  const { site, } = props;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { data, status } = useSession()
  // console.log('data', data)
  // console.log('status', status)
  // Swal.fire({
  //   title: 'Left sidebar 👋',
  //   text: "Hola Mundo",
    
  //   position: 'top-start',
  //   showClass: {
  //     popup: `
  //       animate__animated
  //       animate__fadeInLeft
  //       animate__faster
  //     `
  //   },
  //   hideClass: {
  //     popup: `
  //       animate__animated
  //       animate__fadeOutLeft
  //       animate__faster
  //     `
  //   },
  //   grow: 'column',
  //   width: 600,
  //   showConfirmButton: false,
  //   showCloseButton: true
  // })

  const query = getQuery()
  if (query[0] === 'dashboard') return null
  return (
    <div className="isolate bg-white">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="px-6 pt-6 lg:px-8">
        <div>
          <nav className="flex h-9 items-center justify-between" aria-label="Global">
            <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <CodeBracketIcon className="h-10 w-10 text-orange-500 stroke-2" aria-hidden="true" />

                {/* <img className="h-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" /> */}
              </Link>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href} className="font-semibold text-gray-900 hover:text-gray-900">
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
              {
                status === 'authenticated' && data.token.sid === "63b7004298655500e5009a91" &&
                <Link
                  href={'/dashboard'}

                  className="rounded-full p-1 mr-2 text-gray-600 hover:text-gray-700 "
                >
                  <span className="sr-only">View notifications</span>
                  <Cog6ToothIcon className="h-6 w-6" aria-hidden="true" />
                </Link>
              }
            {status !== 'authenticated' ? (
                <div
                  onClick={() => signIn('google')}
                  className="cursor-pointer inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                >
                  Log in
                </div>
              ) : (
                <div
                  onClick={() => signOut()}
                  className="cursor-pointer inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                >
                  Sign Out
                </div>
              )}
            </div>
          </nav>
          <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
              <div className="flex h-9 items-center justify-between">
                <div className="flex">
                  <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img
                      className="h-8"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt=""
                    />
                  </a>
                </div>
                <div className="flex">
                  <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </div>
      
    </div>
  )
}
