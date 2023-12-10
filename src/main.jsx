import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ModeProvider from './components/ModeContext.jsx'
import LoginProvider from './components/LoginContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <LoginProvider>
      <ModeProvider>
        <App />
      </ModeProvider>
    </LoginProvider>
  </React.StrictMode>,


)
