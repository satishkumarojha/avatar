import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Cards } from './components/cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Cards></Cards>
    </div>
  )
}

export default App
