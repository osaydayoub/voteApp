import React from 'react'
import './HomePage.css'
function HomePage({pageName}) {
  return (
    <div className={`${pageName} page`}>
        <h1> The Home Page</h1>
    </div>
    
  )
}

export default HomePage