import React, { useState } from 'react'
import './App.css'

function App() {
  const[name , setName] = useState("")
  const[count ,setCount] =useState(0)
  const[hovered , setHovered] =useState(false)
  const[dbClickMsg ,setDbClickMsg] = useState("")



  const handleClick  =()=>{
    setCount(count+1)
  }
  
  const handleClickWithMsg =(msg:string) =>{
    console.log(msg)

  }

  const handleSubmit =(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    const form =e.target as HTMLFormElement;
    const fname =(form.elements.namedItem('fname') as HTMLInputElement)?.value
    const lname =(form.elements.namedItem('lname') as HTMLInputElement)?.value
    
    console.log("🚀~handleSubmit ~fname:",fname)

    if(fname === "" || lname === ""){
      alert("All fields are required !")
    }
    console.log(`Hello my fname is ${fname}`)
    console.log(`Hello my lname is ${lname}`)
    
  }

  const handleScroll =(e:React.UIEvent<HTMLDivElement>)=>{
    const target =e.target as HTMLDivElement;
    console.log('Scroll Top' ,target.scrollTop)
  }

  return (
    <>

    <button type='button' onClick={handleClick} style={{marginRight:'10px'}}>count is: {}{count}</button>

    <button type='button'
    onClick={() => handleClickWithMsg("Funny Msg")}
    >
      Hello with msg
    </button>

      <h2>Welcome {name ? `,${name}` :"No name"} !</h2>


      {/* <input type='text'
      value={name}
      placeholder='Enter Your Name  '
      style={{padding:'10px'}}
      onChange={e=>setName(e.target.value)}
      /> */}

      {/* <form onSubmit={handleSubmit}>
        <input type="text" 
        id='fname' 
        placeholder='Enter Your First Name'
         style={{marginRight:'10px' , padding:'12px'}}
         />

        <input type="text" 
        id='lname' 
        placeholder='Enter Your Last Name'
        style={{marginRight:'10px' , padding:'12px'}}
         />
        
        <button type='submit'>submit</button>
      </form> */}

      {/* <div
      onScroll={handleScroll}
      style={{
      border:'1px solid black' ,height: '300px', padding: '2px' , overflow:'scroll'
      }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magnam nostrum necessitatibus adipisci odit. Voluptatibus magni tempore, asperiores itaque nemo nam sit accusantium sunt. Corrupti cumque corporis soluta repudiandae. Optio!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magnam nostrum necessitatibus adipisci odit. Voluptatibus magni tempore, asperiores itaque nemo nam sit accusantium sunt. Corrupti cumque corporis soluta repudiandae. Optio!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magnam nostrum necessitatibus adipisci odit. Voluptatibus magni tempore, asperiores itaque nemo nam sit accusantium sunt. Corrupti cumque corporis soluta repudiandae. Optio!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magnam nostrum necessitatibus adipisci odit. Voluptatibus magni tempore, asperiores itaque nemo nam sit accusantium sunt. Corrupti cumque corporis soluta repudiandae. Optio!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magnam nostrum necessitatibus adipisci odit. Voluptatibus magni tempore, asperiores itaque nemo nam sit accusantium sunt. Corrupti cumque corporis soluta repudiandae. Optio!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magnam nostrum necessitatibus adipisci odit. Voluptatibus magni tempore, asperiores itaque nemo nam sit accusantium sunt. Corrupti cumque corporis soluta repudiandae. Optio!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magnam nostrum necessitatibus adipisci odit. Voluptatibus magni tempore, asperiores itaque nemo nam sit accusantium sunt. Corrupti cumque corporis soluta repudiandae. Optio!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magnam nostrum necessitatibus adipisci odit. Voluptatibus magni tempore, asperiores itaque nemo nam sit accusantium sunt. Corrupti cumque corporis soluta repudiandae. Optio!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magnam nostrum necessitatibus adipisci odit. Voluptatibus magni tempore, asperiores itaque nemo nam sit accusantium sunt. Corrupti cumque corporis soluta repudiandae. Optio!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magnam nostrum necessitatibus adipisci odit. Voluptatibus magni tempore, asperiores itaque nemo nam sit accusantium sunt. Corrupti cumque corporis soluta repudiandae. Optio!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magnam nostrum necessitatibus adipisci odit. Voluptatibus magni tempore, asperiores itaque nemo nam sit accusantium sunt. Corrupti cumque corporis soluta repudiandae. Optio!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magnam nostrum necessitatibus adipisci odit. Voluptatibus magni tempore, asperiores itaque nemo nam sit accusantium sunt. Corrupti cumque corporis soluta repudiandae. Optio!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magnam nostrum necessitatibus adipisci odit. Voluptatibus magni tempore, asperiores itaque nemo nam sit accusantium sunt. Corrupti cumque corporis soluta repudiandae. Optio!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magnam nostrum necessitatibus adipisci odit. Voluptatibus magni tempore, asperiores itaque nemo nam sit accusantium sunt. Corrupti cumque corporis soluta repudiandae. Optio!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magnam nostrum necessitatibus adipisci odit. Voluptatibus magni tempore, asperiores itaque nemo nam sit accusantium sunt. Corrupti cumque corporis soluta repudiandae. Optio!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magnam nostrum necessitatibus adipisci odit. Voluptatibus magni tempore, asperiores itaque nemo nam sit accusantium sunt. Corrupti cumque corporis soluta repudiandae. Optio!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magnam nostrum necessitatibus adipisci odit. Voluptatibus magni tempore, asperiores itaque nemo nam sit accusantium sunt. Corrupti cumque corporis soluta repudiandae. Optio!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magnam nostrum necessitatibus adipisci odit. Voluptatibus magni tempore, asperiores itaque nemo nam sit accusantium sunt. Corrupti cumque corporis soluta repudiandae. Optio!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magnam nostrum necessitatibus adipisci odit. Voluptatibus magni tempore, asperiores itaque nemo nam sit accusantium sunt. Corrupti cumque corporis soluta repudiandae. Optio!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magnam nostrum necessitatibus adipisci odit. Voluptatibus magni tempore, asperiores itaque nemo nam sit accusantium sunt. Corrupti cumque corporis soluta repudiandae. Optio!

      </div> */}

      <div 
      style={{
        width:200,
        height:100,
        background:hovered ? '#ffe066' : '#eee' ,
        border:"2px solid #333",
        marginBottom:16,
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'background 0.2s'      
      }}

      onMouseEnter={()=>setHovered(true)}
      onMouseLeave={() =>setHovered(false)}
      onDoubleClick={() => setDbClickMsg("you double-clicked the div!")}
      >
        {hovered ? "hovering!": "Hover on me"}
        
      </div>
      {dbClickMsg && <p style={{color:'green'}}>{dbClickMsg}</p>}

    </>
  )
}

export default App
