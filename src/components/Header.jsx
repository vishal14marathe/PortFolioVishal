import { motion } from 'framer-motion'
import { FaMoon, FaSun } from 'react-icons/fa'
import { Link } from 'react-scroll'

export default function Header({ darkMode, setDarkMode }) {
    const navLinks = [
        { name: 'Home', to: 'home' },
        { name: 'About', to: 'about' },
        { name: 'Skills', to: 'skills' },
        { name: 'Projects', to: 'projects' },
        { name: 'Experience', to: 'experience' },
        { name: 'Education', to: 'education' },
        { name: 'Contact', to: 'contact' }
    ]

    return (
        <header className="fixed w-full z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <a href="/" className="text-xl font-bold text-gray-900 dark:text-white">
                        <span className="text-blue-500 dark:text-blue-400">Vishal</span> Marathe
                    </a>
                </motion.div>

                <nav className="hidden md:flex space-x-8">
                    {navLinks.map((link, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                            <Link
                                to={link.to}
                                smooth={true}
                                duration={500}
                                className="cursor-pointer text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                                activeClass="text-blue-500 dark:text-blue-400 font-semibold"
                            >
                                {link.name}
                            </Link>
                        </motion.div>
                    ))}
                </nav>

                <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
                >
                    {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
                </motion.button>
            </div>
        </header>
    )
}