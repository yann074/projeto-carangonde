import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'
import Cidadania from './components/Cidadania'
import Options from './components/OPTIONS'
import Footer from './components/Footer'
import Sobre from './components/Sobre'
function App() {


  return (
    <>
      <Header/>
      <Cidadania />
      <Sobre />
      <Options />
   <footer>
      <Footer/>
   </footer>
    </>
  )
}

export default App
