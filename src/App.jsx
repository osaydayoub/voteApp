import { useContext, useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header'
import { siteLinks } from './constants/siteLinkes';
import HomePage from './pages/HomePage/HomePage';
import VotingPage from './pages/VotingPage/VotingPage';
import { ModeContext } from './components/Contexts/ModeContext';
import LoginPage from './pages/LoginPage/LoginPage';
import axios from 'axios';
import { LoginContext } from './components/Contexts/LoginContext';


const [votingPage, homePage] = siteLinks
const [dayMode, nightMode] = ['day', 'night'];

function App() {
  const [mode, setMode] = useContext(ModeContext);
  const [Login, setLogin] = useContext(LoginContext);
  const [usersData, setUsersData] = useState(null);
  const [currentPage, setCurrentPage] = useState("Voting");
  const handleChangePage = (pageName) => {
    setCurrentPage(pageName);
  }
  useEffect(() => {
    axios.get('https://657604270febac18d40395ec.mockapi.io/users')
      .then((respons) => {
        setUsersData(respons.data);
      })
  }, []);




  return (
    <>
      {/* {(usersData !== null) && console.log(usersData[0])} */}
      {!Login && <LoginPage usersData={usersData}></LoginPage>}

      {Login && <Header handleChangePage={handleChangePage} />}
      {Login && currentPage === homePage && <HomePage pageName={(mode === dayMode) ? `day-mode-page` : `night-mode-page`} />}
      {Login && currentPage === votingPage && <VotingPage pageName={(mode === dayMode) ? `day-mode-page` : `night-mode-page`} />}


    </>


  )
}

export default App
