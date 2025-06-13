import { useState } from 'react'
import './App.css'

function App() {
  const[name , setName] = useState("")
  const[count ,setCount] =useState(0)
  const handleClick  =()=>{
    setCount(count+1)
  }

  return (
    <>

    <button type='button' onClick={handleClick}>count is: {}{count}</button>
      <h2>Welcome {name ? `,${name}` :"No name"} !</h2>


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
