

import './App.css'
import Home from './components/pages/Home'
import Header from './components/layouts/Header'
import About from './components/pages/About'
import Project from './components/pages/Project'
import Contact from './components/pages/Contact'
import Footer from './components/layouts/Footer'


function App() {
  

  return (
    <>
      <Header />
        <section id='home'>
          <Home />
        </section>
        <section id='about'>
          <About />
        </section>
        <section id='project'>
          <Project />
        </section>
        <section id='contact'>
          <Contact />
        </section>
      <Footer />
    </>
  )
}

export default App
