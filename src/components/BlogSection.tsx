/* eslint-disable @next/next/no-img-element */
import { BlogService } from "@/services/blog.service";
import Link from "next/link";

export const BlogSection = async () => {

    const blogService = new BlogService();
    const listOfPosts = await blogService.getAllPosts();

    return (
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 mb-36">
            {listOfPosts.map((post) => (
                <article key={post.id} className="flex max-w-xl flex-col items-start justify-between border rounded-xl overflow-hidden">
                    <Link href={post.id}>
                        <img src={post.image} alt={post.category} />
                    </Link>
                    <div className="flex items-center gap-x-4 text-xs px-5">
                        <time dateTime={post.date.toString()} className="text-gray-500">
                            {post.date}
                        </time>
                        <Link
                            href={'/blog?category=' + post.category}
                            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                        >
                            {post.category}
                        </Link>
                    </div>
                    <div className="group relative px-5 pb-5">
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                            <Link href={post.id}>
                                <span className="absolute inset-0" />
                                {post.title}
                            </Link>
                        </h3>
                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                    </div>
                    {/* <div className="relative mt-8 flex items-center gap-x-4">
                        <img alt="" src={post.author} className="h-10 w-10 rounded-full bg-gray-50" />
                        <div className="text-sm leading-6">
                            <p className="font-semibold text-gray-900">
                                <a href={post.author}>
                                    <span className="absolute inset-0" />
                                    {post.author}
                                </a>
                            </p>
                            <p className="text-gray-600">{post.author}</p>
                        </div>
                    </div> */}
                </article>
            ))}
        </div>
    )
}
