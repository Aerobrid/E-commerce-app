import { useState } from 'react'
import './App.css'
import Header from './components/header.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <main className='main-stuff'>
        <h1>Welcome to the E-commerce App</h1>
        <p>Current count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </main>
      <Footer/>
    </div>
  )
}

export default App
