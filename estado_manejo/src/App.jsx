import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Componentes/Header'
import ListaCompras from './Componentes/Content'
import Footer from './Componentes/Footer'

function App() {

  return (
    <>
      <Header/>
      <ListaCompras/>
      <Footer/>
    </>
  )
}

export default App
