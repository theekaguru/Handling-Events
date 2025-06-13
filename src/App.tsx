import { useState } from 'react'
import './App.css'

function App() {
  const[name , setName] = useState("")

  return (
    <>
      <h2>Welcome {name ? `,${name}` : "No name"} !</h2>


      <input type='text'
      value={name}
      placeholder='Enter Your Name  '
      style={{padding:'10px'}}
      onChange={e=>setName(e.target.value)}
      />
    </>
  )
}

export default App
