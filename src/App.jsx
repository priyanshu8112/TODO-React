import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [text, settext] = useState("")
  const [maintask, setmaintask] = useState([])


  let rendertask= <h2 className=' text-black'>No Task Available</h2>;

  const submitHandler=(e)=>{
    e.preventDefault()
    setmaintask([...maintask,{text}])
    console.log(maintask)
    settext("")
  }
  const deleteHandler=(i)=>{
    let copy=[...maintask]
    copy.splice(i,1)
    setmaintask(copy)
  }
 
 if(maintask.length>0){
  rendertask=maintask.map((t,i)=>{
    return (
                <li className=' flex items-center justify-between list-decimal' key={i}>
                <div className=' flex items-center justify-between mb-5 w-2/3'>
                <h5 className=' px-16'>{t.text}</h5>
                <button className=' bg-cyan-500 text-white  rounded-md w-16 text-xl my-4'
                 onClick={()=>{
                    deleteHandler(i)
                 }}
                 >delete</button>
                
          </div>
          </li>
    );
    
    
  })
 }
  

  return (
    <>  
       <div className='bg-gradient-to-t from-cyan-300 to-fuchsia-300 w-full min-h-screen p-3'>
            <h1 className='  p-5 text-center text-black text-3xl'>TODO-LIST</h1>
              <form onSubmit={submitHandler}>
                <input type="text" placeholder='Add Your Text' className=' border-0 px-4 py-2 m-8 border-zinc-800 w-60 outline-none'  
                  value={text}
                  onChange={(e)=>(
                    settext(e.target.value)
                  )}
                />
                <button className=' bg-red-500 text-white w-24 text-2xl rounded-md h-10'>ADD</button>
              </form> 
              <div className=' bg-white text-black mt-10' > 
                    <ul>
                        {rendertask}
                    </ul>
        
              </div>
       </div>
        
       
        
    </>
  )
}

export default App
