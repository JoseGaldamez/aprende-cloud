export const Footer = () => {
    return (
        <footer className="bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">José Galdámez</a>. Todos los derechos compartidos.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="/about" className="hover:underline me-4 md:me-6">Sobre este sitio</a>
                </li>
                <li>
                    <a href="/privacy-policy" className="hover:underline me-4 md:me-6">Políticas de privacidad</a>
                </li>
                <li>
                    <a href="/contact" className="hover:underline">Contacto</a>
                </li>
            </ul>
        </footer>

    );
}