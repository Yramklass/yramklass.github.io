
import './App.css'
import AboutComponent from './components/AboutComponent'
import BioComponent from './components/BioComponent'
import DetailsSection from './components/DetailsSection'
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
        <FooterComponent/>
      </div>
    </>
  )
}

export default App
