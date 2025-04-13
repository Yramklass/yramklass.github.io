
import './App.css'
import AboutComponent from './components/AboutComponent'
import BioComponent from './components/BioComponent'
import ContactComponent from './components/ContactComponent'
import ContactSection from './components/ContactSection'
import DetailsSection from './components/DetailsSection'
import DigitalNoticeBoard from './components/DigitalNoticeBoard'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ProjectsComponent from './components/ProjectsComponent'
import ProjectShowcase from './components/ProjectShowcase'


function App() {

  return (
    <>
      <div>
        <HeaderComponent/>
        {/* <BioComponent/> */}
        {/* <AboutComponent/> */}
        <DetailsSection/>
        <ProjectShowcase/>
        <ContactSection/>
        {/* <ContactComponent/> */}
        {/* <DigitalNoticeBoard/> */}
        <FooterComponent/>

      </div>
    </>
  )
}

export default App
