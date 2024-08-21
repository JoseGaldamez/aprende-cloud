'use client';
import { NavbarAdmin } from "@/components";
import Link from "next/link";
import { useState } from "react";

const listOfButtons = [
    {
        action: "paragraph",
        title: "Párrafo",
        image: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mx-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
        </svg>

    },
    {
        action: "image",
        title: "Imagen",
        image: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mx-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>
    },
    {
        action: "quote",
        title: "Cita",
        image: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mx-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
        </svg>

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
                                            buttonAction.image
                                        }
                                        {buttonAction.title}
                                    </button>
                                ))
                            }
                        </div>
                    </div>

                </div>
            </main >
        </>
    )
}

export default AddNewPost;