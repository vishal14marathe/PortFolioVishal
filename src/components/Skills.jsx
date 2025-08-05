import { motion } from 'framer-motion'
import { skills } from '../data/skills'

export default function Skills() {
    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
                    <div className="max-w-4xl mx-auto bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold mb-4 border-b pb-2 border-gray-200 dark:border-gray-600">Technical Skills</h3>
                                <ul className="space-y-2">
                                    {skills.technical.map((skill, index) => (
                                        <motion.li
                                            key={index}
                                            whileHover={{ x: 5 }}
                                            className="flex items-center"
                                        >
                                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                            {skill}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-4 border-b pb-2 border-gray-200 dark:border-gray-600">Tools & Frameworks</h3>
                                <ul className="space-y-2">
                                    {skills.tools.map((tool, index) => (
                                        <motion.li
                                            key={index}
                                            whileHover={{ x: 5 }}
                                            className="flex items-center"
                                        >
                                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                            {tool}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-4 border-b pb-2 border-gray-200 dark:border-gray-600">Product Skills</h3>
                                <ul className="space-y-2">
                                    {skills.product.map((skill, index) => (
                                        <motion.li
                                            key={index}
                                            whileHover={{ x: 5 }}
                                            className="flex items-center"
                                        >
                                            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                                            {skill}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}