import { useContext, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import { siteLinks } from './constants/siteLinkes';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import { ModeContext } from './components/ModeContext';
// import ModeContext from './components/ModeContext';
// import ModeProvider from './components/ModeContext';


const [homePage, aboutPage] = siteLinks
const [dayMode, nightMode] = ['day', 'night'];

function App() {
  const { mode, setMode } = useContext(ModeContext);


  const [currentPage, setCurrentPage] = useState("Home");
  const handleChangePage = (pageName) => {
    setCurrentPage(pageName);
  }

  return (

    <>
      {/* <ModeProvider> */}
      <Header handleChangePage={handleChangePage} />

      {currentPage === homePage && <HomePage pageName={(mode === dayMode) ? `day-mode-page` : `night-mode-page`} />}
      {currentPage === aboutPage && <AboutPage pageName={(mode === dayMode) ? `day-mode-page` : `night-mode-page`} />}


      {/* </ModeProvider> */}


    </>


  )
}

export default App
