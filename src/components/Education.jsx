import { motion } from 'framer-motion'
import { education } from '../data/eduction'

export default function Education() {
    return (
        <section id="education" className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
                    <div className="max-w-4xl mx-auto space-y-8">
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
                            >
                                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold">{edu.degree}</h3>
                                        <p className="text-gray-600 dark:text-gray-300">{edu.institution}</p>
                                    </div>
                                    <div className="mt-2 md:mt-0">
                                        <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                                            {edu.year}
                                        </span>
                                    </div>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300">{edu.details}</p>
                                {index === 0 && (
                                    <div className="mt-4">
                                        <h4 className="font-semibold mb-2">Certifications:</h4>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                            <li className="flex items-center">
                                                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                                Product Management Professional Certificate – UMD & USMx (edX)
                                            </li>
                                            <li className="flex items-center">
                                                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                                Business Analytics – Harvard Business School Online
                                            </li>
                                            <li className="flex items-center">
                                                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                                AI Essentials for Business – Harvard Business School Online
                                            </li>
                                            <li className="flex items-center">
                                                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                                Agile Product Management – Institute of Product Leadership
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}