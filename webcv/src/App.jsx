
import './App.css'
import AboutComponent from './components/AboutComponent'
import BioComponent from './components/BioComponent'
import HeaderComponent from './components/HeaderComponent'
import ProjectsComponent from './components/ProjectsComponent'
import ProjectShowcase from './components/ProjectShowcase'


function App() {

  return (
    <>
      <div>
        <HeaderComponent/>
        <BioComponent/>
        <AboutComponent/>
        <ProjectShowcase/>
      </div>
    </>
  )
}

export default App
