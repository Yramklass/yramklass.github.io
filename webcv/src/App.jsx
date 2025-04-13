
import './App.css'

import ContactSection from './components/ContactSection'
import DetailsSection from './components/DetailsSection'

import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'

import ProjectShowcase from './components/ProjectShowcase'


function App() {

  return (
    <>
      <div>
        <HeaderComponent/>

        <DetailsSection/>
        <ProjectShowcase/>
        <ContactSection/>

        <FooterComponent/>

      </div>
    </>
  )
}

export default App
