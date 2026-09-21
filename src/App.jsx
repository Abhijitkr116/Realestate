import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer'

function App() {
  return (
    <>
    <ToastContainer/>
    <Header/>
    <About/>
    <Projects/>
    <Testimonials/>
    <Contact/>
    <Footer />
    </>
  )
}

export default App