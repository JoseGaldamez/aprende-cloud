/* eslint-disable @next/next/no-img-element */

interface IBlogArticle {
    title: string;
    urlImage: string;
    date: string;
    description: string;
}

export const BlogTopSection = ({ title, urlImage, date, description }: IBlogArticle) => {

    return (
        <>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-6xl leading-tight mt-10 mb-5 ">{title}</h2>
                <time className="text-sm text-gray-400 block mb-5">{date}</time>
                <hr />
                <p className="text-gray-600 mt-5">
                    {description}
                </p>
            </div>
            <div className="mt-10">
                <img className="w-full" src={urlImage} alt={title} />
            </div>
        </>
    );
}