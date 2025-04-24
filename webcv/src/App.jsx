import { useEffect } from 'react';
import './App.css'

import ContactSection from './components/ContactSection'
import DetailsSection from './components/DetailsSection'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ProjectShowcase from './components/ProjectShowcase'

function App() {

  useEffect(() => {
    const favicon = document.getElementById('favicon');
    const darkMode = window.matchMedia('(prefers-color-scheme: dark)');


    const updateFavicon = () => {
      if (favicon) {
        favicon.href = darkMode.matches ? '/favicon.svg' : '/favicon_trans.svg';
      }
    };

    updateFavicon(); // Initial check
    darkMode.addEventListener('change', updateFavicon);

    return () => {
      darkMode.removeEventListener('change', updateFavicon);
    };
  }, []);
  

  return (
    <>
      <div>
        <HeaderComponent />
        <DetailsSection />
        <ProjectShowcase />
        <ContactSection />
        <FooterComponent />
      </div>
    </>
  )
}

export default App;
