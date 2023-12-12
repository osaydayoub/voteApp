import { useContext, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import { adminSiteLinks, siteLinks } from './constants/siteLinkes';
import VotingPage from './pages/VotingPage/VotingPage';
import { ModeContext } from './components/Contexts/ModeContext';
import LoginPage from './pages/LoginPage/LoginPage';
import axios from 'axios';
import { LoginContext } from './components/Contexts/LoginContext';
import AdminPage from './pages/AdminPage/AdminPage';


const [votingPage, adminPage] = adminSiteLinks
const [dayMode, nightMode] = ['day', 'night'];

function App() {
  const [mode, setMode] = useContext(ModeContext);
  const [Login, setLogin] = useContext(LoginContext);
  
  const [currentPage, setCurrentPage] = useState("Voting");
  const handleChangePage = (pageName) => {
    setCurrentPage(pageName);
  }

  return (
    <>
      {/* {(usersData !== null) && console.log(usersData[0])} */}
      {!Login && <LoginPage handleChangePage={setCurrentPage}></LoginPage>}
      {Login && <Header handleChangePage={handleChangePage} />}
      {Login && currentPage === adminPage &&
        <AdminPage pageName={(mode === dayMode) ? `day-mode-page` : `night-mode-page`} />}
      {Login && currentPage === votingPage && <VotingPage pageName={(mode === dayMode) ? `day-mode-page` : `night-mode-page`} />}


    </>


  )
}

export default App
