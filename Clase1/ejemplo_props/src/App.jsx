import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Componentes/Header'
import Content from './Componentes/Content'
import Footer from './Componentes/Footer'

function App() {

  const user = {
    name: "Marina",
    age: 29,
    curso: "React"
  }

  return (
    <>
      <Header name="Marina" user={user}/>
      <Content user={user}/>
      <Footer/>
    </>
  )
}

export default App
