import { ProgressBar } from './components/ProgressBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Curiosities } from './components/Curiosities'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Questions } from './components/Questions'
import { Beyond } from './components/Beyond'
import { Achievements } from './components/Achievements'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

// Global button styles injected once
const globalButtonStyles = `
  .btn-primary {
    display: inline-block;
    padding: 0.7rem 1.8rem;
    font-size: 0.85rem;
    font-weight: 400;
    letter-spacing: 0.06em;
    border-radius: 2rem;
    text-decoration: none;
    background: var(--dark);
    color: var(--cream);
    border: none;
    cursor: pointer;
    font-family: 'DM Sans', system-ui, sans-serif;
    transition: background 0.25s, transform 0.25s;
  }
  .btn-primary:hover {
    background: var(--text);
    transform: translateY(-1px);
  }
  .btn-outline {
    display: inline-block;
    padding: 0.7rem 1.8rem;
    font-size: 0.85rem;
    font-weight: 400;
    letter-spacing: 0.06em;
    border-radius: 2rem;
    text-decoration: none;
    background: transparent;
    color: var(--text);
    border: 0.5px solid var(--mid-gray);
    cursor: pointer;
    font-family: 'DM Sans', system-ui, sans-serif;
    transition: border-color 0.25s, background 0.25s;
  }
  .btn-outline:hover {
    border-color: var(--dark);
    background: var(--off-white);
  }
`

export default function App() {
  return (
    <>
      <style>{globalButtonStyles}</style>
      <ProgressBar />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Curiosities />
        <Experience />
        <Projects />
        <Questions />
        <Beyond />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
