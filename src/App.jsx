import './App.css'
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Languages from './components/languages/Languages';
import Qualification from './components/qualifications/Qualification';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import Portfolio from './components/projects/Portfolio';

function App() {
  
  return (
    <div className='App'>
      <Header />
      <Home />
      <About />
      <Qualification />
      <Skills />
      <Languages />
      <Portfolio />
      <Footer />
      <ScrollUp />

      

    </div>
  )
}

export default App
