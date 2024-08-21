import { BlogSection, Navbar } from "@/components";

interface IBlogByCategory { [key: string]: string | string[] | undefined }


const Blog = ({
    searchParams,
}: {
    searchParams: IBlogByCategory
}) => {
    let titleBlogPage = "Todos los artículos";

    if (searchParams['category']) {
        titleBlogPage = 'Artículos sobre ' + searchParams['category'];
    }

    return (
        <>
            <Navbar />
            <main>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 className="my-10 text-2xl">{titleBlogPage}</h2>
                    <hr />
                    <div className="pt-10">
                        <BlogSection />
                    </div>
                </div>
            </main>
        </>
    );

}


export default Blog;