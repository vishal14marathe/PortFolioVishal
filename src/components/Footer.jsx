import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'


export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-2xl font-bold mb-2">
                            <span className="text-blue-400">Shrish</span> Prakash Giri
                        </h3>
                        <p className="text-gray-400">Product Manager & Fintech Specialist</p>
                    </div>

                    <div className="flex space-x-6">
                        <a
                            href="https://linkedin.com/in/shrishprakashgiri234"
                            target="_blank"
                            className="text-gray-400 hover:text-blue-400 transition-colors text-xl"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="mailto:shrishhpsirri@gmail.com"
                            className="text-gray-400 hover:text-red-400 transition-colors text-xl"
                        >
                            <FaEnvelope />
                        </a>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                    <p>© {new Date().getFullYear()} Shrish Prakash Giri. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}


