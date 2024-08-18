/* eslint-disable @next/next/no-img-element */
import { Navbar } from "@/components";
import { BlogTopSection } from "@/components";
import { BlogService } from "@/services/blog.service";

const BlogPage = async ({ params }: { params: { url: string } }) => {

    const blogService = new BlogService();
    const post = await blogService.getPostsByID(params.url);

    if (!post) {
        return (
            <>
                <h3>404</h3>
            </>
        )
    }

    return (
        <>
            <Navbar />
            <main className="single-post mb-20">
                <BlogTopSection title={post.title} urlImage={post.image} date={post.date} description={post.description} />

                <div dangerouslySetInnerHTML={{ __html: post.content }} className="mx-auto max-w-3xl px-6 lg:px-8">
                </div>

            </main>
        </>
    )
}


export default BlogPage;