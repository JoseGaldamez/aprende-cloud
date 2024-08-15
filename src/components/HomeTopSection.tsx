export const HomeTopSection = () => {
    return (

        <section className="bg-cover bg-center bg-no-repeat bg-[url('https://t3.ftcdn.net/jpg/03/09/99/66/360_F_309996684_3yIvdT0HFBqBTBv9mz9694VoDW4pqPpj.jpg')] bg-white bg-opacity-70 bg-blend-overlay">
            <div className="px-4 mx-auto max-w-screen-xl py-12 lg:py-28">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">

                    <h1 className="mb-4 text-4xl font-extrabold max-w-4xl tracking-tight leading-none md:text-5xl lg:text-6xl">Aprende Cloud</h1>
                    <p className="mb-8 text-lg font-normal max-w-2xl text-gray-500 lg:text-xl">
                        Este espacio está creado para compartir lo aprendido sobre la computación en la nube mientras curso las certificaciones oficiales de Google Cloud Platform. Espero este espacio sirva de reforzamiento y repaso para aquellos que también es apasiona este tema.
                    </p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0">
                        <a href="/blog" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                            Comencemos
                            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>

                    </div>
                </div>
            </div>
        </section>
    );
}