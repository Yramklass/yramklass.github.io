
import './App.css'
import AboutComponent from './components/AboutComponent'
import BioComponent from './components/BioComponent'
import HeaderComponent from './components/HeaderComponent'
import ProjectsComponent from './components/ProjectsComponent'


function App() {

  return (
    <>
      <div>
        <HeaderComponent/>
        <BioComponent/>
        <AboutComponent/>
        <ProjectsComponent/>
      </div>
    </>
  )
}

export default App
