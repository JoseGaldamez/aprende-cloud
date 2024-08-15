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
                    <h2>{titleBlogPage}</h2>
                    <BlogSection />
                </div>
            </main>
        </>
    );

}


export default Blog;