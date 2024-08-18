'use client';
import { NavbarAdmin } from "@/components";
import Link from "next/link";
import { useState } from "react";

const listOfButtons = [
    {
        action: "paragraph",
        title: "Párrafo",
    },
    {
        action: "image",
        title: "Imagen",
    }
]

const AddNewPost = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const [content, setContent] = useState<any[]>([]);


    return (
        <>
            <NavbarAdmin />
            <main className="mx-auto max-w-3xl px-6 lg:px-8 mt-10">
                <Link className="mb-5 flex items-center text-blue-400 hover:text-blue-500" href={'/admin'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mr-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                    </svg>

                    Volver al inicio</Link>

                <hr />

                <div className="new_post_content">

                    <div className="mt-6">
                        <textarea value={title} onChange={(event) => {
                            setTitle(event.target.value)
                        }} className="text-4xl block w-full p-4 text-gray-900 rounded-lg bg-white" placeholder="Título del artículo" aria-multiline="true" />
                    </div>
                    <div className="mb-6">
                        <textarea value={description} onChange={(event) => {
                            setDescription(event.target.value)
                        }} className="block w-full p-4 text-gray-900 rounded-lg bg-white" placeholder="Introducción corta del artículo" aria-multiline="true" />
                    </div>

                    <hr />

                    <div className="text-center">
                        <h4 className="p-5 text-gray-400">Elige qué elemento agregar</h4>
                        <div className="flex text-center items-center justify-center">
                            {
                                listOfButtons.map(buttonAction => (
                                    <button key={buttonAction.action}
                                        className={"py-2 px-10 mx-3 flex rounded-lg bg-slate-50 hover:bg-slate-200 text-gray-500 border hover:text-gray-900 "}>
                                        {
                                            buttonAction.action == "paragraph" ? (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mx-2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                            </svg>
                                            ) : (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mx-2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                            </svg>
                                            )
                                        }
                                        {buttonAction.title}
                                    </button>
                                ))
                            }
                        </div>
                    </div>

                </div>
            </main>
        </>
    )
}

export default AddNewPost;