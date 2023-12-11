import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ModeProvider from './components/Contexts/ModeContext.jsx'
import LoginProvider from './components/Contexts/LoginContext.jsx'
import UserProvider from './components/Contexts/UserContext.jsx'
import SelectedTeamProvider from './components/Contexts/SelectedTeamContext.jsx'
import VoteStatusProvider from './components/Contexts/VoteStatusContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <ModeProvider>
      <LoginProvider>
        <UserProvider>
          <VoteStatusProvider>
            <SelectedTeamProvider>
              <App />
            </SelectedTeamProvider>
          </VoteStatusProvider>
        </UserProvider>
      </LoginProvider>
    </ModeProvider>
  </React.StrictMode>,


)
