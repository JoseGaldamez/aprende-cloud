/* eslint-disable @next/next/no-img-element */
import { CommentsSection, Footer, Navbar } from "@/components";
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
                {/* 
                <div className="mx-auto max-w-3xl px-6 lg:px-8">
                    <h3>Según El Instituto Nacional de Estándares y Tecnología de EE.UU.</h3>
                    <p>Esta respetable institución compartió una definición que nos parece suficientemente completa. Es bastante amplia, pero el término lo amerita.</p>
                    <h4>_01. Los clientes obtienen recursos de procesamiento que son según demanda y de autoservicio.</h4>
                    <img src="https://ucloudglobal.com/wp-content/uploads/2021/08/Google-Cloud-Platform.png" alt="Imagen Google services" />

                </div> 
                */}

                <CommentsSection postId={post.id} />

            </main>
            <Footer />
        </>
    )
}


export default BlogPage;