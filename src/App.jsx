import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-6xl font-bold'>Welcome to my Website!</h1>
      <h2 className='text-4xl font-medium'>This is a Authentication Website</h2>
    </>
  )
}

export default App
