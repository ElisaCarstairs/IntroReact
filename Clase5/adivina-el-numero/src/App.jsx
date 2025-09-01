import { useState } from 'react'
import './App.css'
import Game from './Components/Game'
import InputNumber from './Components/InputNumber'
import message from './Components/Message'
import RestartButton from './Components/RestartButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Game/>
    </>
  )
}

export default App
