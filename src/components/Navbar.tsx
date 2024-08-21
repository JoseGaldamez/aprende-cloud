/* eslint-disable @next/next/no-img-element */
'use client'

import { useState } from 'react'
import {
    Dialog,
    DialogPanel,
    PopoverGroup,
} from '@headlessui/react';
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link';

export const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [searchValue, setSearchValue] = useState("")
    const [searchPanel, setSearchPanel] = useState(false)
    const [showMessageWorking, setShowMessageWorking] = useState(false)

    return (
        <header className="bg-white">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-1 px-8">
                <div className="flex lg:flex-1">
                    <Link href="/" className="p-1">
                        <span className="sr-only">Aprende Cloud</span>
                        <img alt="" src="https://cdn-icons-png.flaticon.com/512/7531/7531646.png" className="h-12 w-auto" />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                    {/* <Popover className="relative">
                        <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                            Product
                            <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                        </PopoverButton>

                        <PopoverPanel
                            transition
                            className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                            <div className="p-4">
                                {products.map((item) => (
                                    <div
                                        key={item.name}
                                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                    >
                                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                            <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                                        </div>
                                        <div className="flex-auto">
                                            <a href={item.href} className="block font-semibold text-gray-900">
                                                {item.name}
                                                <span className="absolute inset-0" />
                                            </a>
                                            <p className="mt-1 text-gray-600">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                {callsToAction.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                                    >
                                        <item.icon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </PopoverPanel>
                    </Popover> */}

                    <Link href="/blog" className="text-sm font-semibold leading-6 text-gray-900">
                        Blog
                    </Link>
                    {/* <Link href="/blog?category=Storage" className="text-sm font-semibold leading-6 text-gray-900">
                        Almacenamiento
                    </Link>
                    <Link href="/blog?category=Security" className="text-sm font-semibold leading-6 text-gray-900">
                        Seguridad
                    </Link> */}
                </PopoverGroup>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <button onClick={() => setSearchPanel(true)} className="text-sm font-semibold leading-6 text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>

                    </button>
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                alt=""
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                className="h-8 w-auto"
                            />
                        </Link>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {/* <Disclosure as="div" className="-mx-3">
                                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                        Product
                                        <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                                    </DisclosureButton>
                                    <DisclosurePanel className="mt-2 space-y-2">
                                        {[...products, ...callsToAction].map((item) => (
                                            <DisclosureButton
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </DisclosureButton>
                                        ))}
                                    </DisclosurePanel>
                                </Disclosure> */}
                                <Link
                                    href="/blog"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Blog
                                </Link>
                                {/* <Link
                                    href="/blog?category=Storage"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Almacenamiento
                                </Link>
                                <Link
                                    href="/blog?category=Security"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Seguridad
                                </Link> */}
                            </div>
                            <div className="py-6">
                                <button
                                    onClick={() => {
                                        setSearchPanel(true)
                                        setMobileMenuOpen(false)
                                    }}
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>

                                </button>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>

            {/* Search form */}

            {
                searchPanel && (
                    <div className='fixed top-0 left-0 w-full h-full bg-white bg-opacity-95 z-50'>
                        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                            <div className='text-end mt-3'>
                                <button onClick={() => setSearchPanel(false)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>

                                </button>
                            </div>
                            <div className='mt-20 bg-white bg-opacity-50'>
                                <h3 className='text-3xl font-bold py-5'>Buscar artículos sobre:</h3>
                                <input
                                    value={searchValue}
                                    onChange={(e) => setSearchValue(e.target.value)}
                                    onKeyPress={(e) => {
                                        if (e.key === 'Enter') {
                                            setShowMessageWorking(true);
                                        } else {
                                            setShowMessageWorking(false);
                                        }
                                    }}
                                    type="text" placeholder='Almacenamiento, Arquitectura, etc...' className='bg-white border border-gray-500 rounded-lg text-xl p-3 block w-full' />

                                <div className='m-5'>
                                    {
                                        showMessageWorking && (
                                            <div>
                                                <p className='text-lg my-5'>Buscando: <strong>{searchValue}
                                                </strong></p>
                                                <p className='text-gray-400 italic'>
                                                    La funcionalidad de búsqueda aún está en desarrollo. Pronto podrá utilizarla sin problemas.
                                                </p>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>

                        </div>

                    </div>
                )
            }



        </header>
    )
}
