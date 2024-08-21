import { Footer, Navbar } from "@/components";

const About = () => {
    return (
        <>
            <Navbar />
            <main className="mx-auto max-w-7xl px-6 py-10 lg:px-8 single-post">
                <h2 className="text-4xl">Sobre este sitio</h2>
                <hr />
                <p>Este no es un sitio web oficial ni pretende serlo. Es simplemente un blog en el que apasionados de la tecnología cloud escriben sus experiencias y lo aprendido durante el proceso de certificación de <strong>Google Cloud Platform.</strong></p>
                <p>Mi nombre es <a href="https://josegaldamez.dev" target="_blank" className="font-bold underline">José Galdámez</a> y soy Desarrollador Fullstack. La razón de iniciar este blog es porque considereo que aprendo más profundamente los conceptos cuando tengo que explicarlos de manera simple a otras personas. De esa forma, compartiendo lo aprendido, yo también aprendo un poco más y mejor en el proceso.</p>

                <h4>¿Por qué Google Cloud Platform y no otra nube?</h4>
                <p>Google es una de las plataformas líderes en el mundo de la computación cloud. Junto con <strong> Amazon Web Services </strong> y <strong> Azure </strong> lideran y prácticamente sostienen el mundo cloud, de eso no hay duda. La razón por la que este blog está mayormente enfocado en GCP es simplemente porque es la certificación que estoy cursando en este momento.</p>
                <p>La certificación es patrocinada por la empresa de la que hago parte actualmente y aprovecho para agradecer a <a className="font-bold underline" target="_blank" href="https://stefanini.com/es/stefanini/latam-digital-hub">Stefanini Group - Latam</a> por siempre impulsarnos y capacitarnos para estar a la vanguardia en los sectores tecnológicos de la región y a nivel mundial.</p>

            </main>

            <Footer />
        </>
    )
}


export default About;