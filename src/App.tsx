import React from 'react'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Header />
      Hello, samurai! Let's go!
      <h1>Go!</h1>
    </div>
  )
}

const Header = () => {
  return (
    <div>
      <a href='#'>Home</a>
      <a href='#'>News</a>
      <a href='#'>Message</a>
    </div>
  )
}

export default App
