
import './App.css'
import AboutComponent from './components/AboutComponent'
import BioComponent from './components/BioComponent'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ProjectsComponent from './components/ProjectsComponent'
import ProjectShowcase from './components/ProjectShowcase'


function App() {

  return (
    <>
      <div>
        <HeaderComponent/>
        <BioComponent/>
        {/* <AboutComponent/> */}
        <ProjectShowcase/>
        <FooterComponent/>
      </div>
    </>
  )
}

export default App
