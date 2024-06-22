import { useState } from 'react'
import Register from './Register'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">
    <h1>Đăng ký tài khoản</h1>
  <Register/>
  </div>
    </>
    
  )
}

export default App
