import { useState } from "react"

function App() {
  let [counter,setCounter] = useState(0)

  const add = ()=>{
    if(counter === 20){
      alert(`counter has reached 20`)
      return
    }
    setCounter(counter+1)
  }

  const subtract = ()=>{
    if(counter === 0){
      alert(`counter is less than 0`)
      return
    }
    setCounter(counter-1)
  }
  return (
    <>
    <h1 className="bg-amber-400">counter updation {counter}</h1>
    <button onClick={add}>add me</button>
    <button onClick={subtract}>subtract me</button>
    </>
  )
}

export default App
