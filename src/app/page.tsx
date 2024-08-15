import { Navbar, BlogSection, Footer, HomeTopSection } from "@/components";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <HomeTopSection />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <BlogSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
