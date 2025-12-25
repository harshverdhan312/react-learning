import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setcolor] = useState("olive")

  return (
      <div className='w-full h-screen m-0 p-0 duration-500'
      style={{
        backgroundColor : color
      }}>
        <div className='fixed flex flex-wrap inset-x-0 px-2 py-5 justify-center '>
                <div className='fixed flex flex-wrap bg-white gap-3 justify-center rounded-3xl 
                '>
                  <button className='m-3 p-1 text-white bg-red-500 rounded-xl border-2 border-solid'
                  onClick={()=>setcolor("red")}>Red</button>
                  <button className='m-3 p-1 text-white bg-yellow-500 rounded-xl border-2 border-solid'
                  onClick={()=>setcolor("Yellow")}>Yellow</button>
                  <button className='m-3 p-1 text-white bg-green-500 rounded-xl border-2 border-solid'
                  onClick={()=>setcolor("green")}>Green</button>
                  <button className='m-3 p-1 text-white bg-black rounded-xl border-2 border-solid'
                  onClick={()=>setcolor("black")}>Black</button>
                  <button className='m-3 p-1 text-white bg-orange-500 rounded-xl border-2 border-solid'
                  onClick={()=>setcolor("orange")}>Orange</button>
                </div>
        </div>
      </div>
  )
}

export default App
