import { useState, useEffect } from 'react'
import About from './components/About'
import Hero from './components/Hero'
import Header from './components/Header'
import Contact from './components/Contact'
import Education from './components/Education'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true' ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches &&
        localStorage.getItem('darkMode') !== 'false')
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    localStorage.setItem('darkMode', darkMode)
  }, [darkMode])

  return (
    <div className={`min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="bg-white dark:bg-gray-900">
        <section id="home" className="section bg-white dark:bg-gray-900">
          <Hero />
        </section>

        <section id="about" className="section bg-white dark:bg-gray-900">
          <About />
        </section>

        <section id="skills" className="section bg-white dark:bg-gray-900">
          <Skills />
        </section>

        <section id="projects" className="section bg-white dark:bg-gray-900">
          <Projects />
        </section>

        <section id="experience" className="section bg-white dark:bg-gray-900">
          <Experience />
        </section>

        <section id="education" className="section bg-white dark:bg-gray-900">
          <Education />
        </section>

        <section id="contact" className="section bg-white dark:bg-gray-900">
          <Contact />
        </section>
      </main>

      <Footer className="bg-white dark:bg-gray-800" />
    </div>
  )
}

export default App