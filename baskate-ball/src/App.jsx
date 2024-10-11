import { useState } from 'react'
import './App.css'
import ApiData from './components/ApiData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1> My FootBall Api </h1>
        <ApiData></ApiData>
      </div>
    </>
  )
}

export default App
