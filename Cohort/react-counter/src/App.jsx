import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  

  return (
    <div>
       {/* <button onClick={buttonHandler}>Counter {count}</button>  */}
      
      <div><CustomButton count={count}  setCount = {setCount} ></CustomButton></div>
      <div><CustomButton count={count+1}  setCount = {setCount} ></CustomButton></div>
      <div><CustomButton count={count-1}  setCount = {setCount} ></CustomButton></div>
      <div><CustomButton count={count**2}  setCount = {setCount} ></CustomButton></div>
      <div><CustomButton count={count**2}  setCount = {setCount} ></CustomButton></div>
      <div><CustomButton count={count**2}  setCount = {setCount} ></CustomButton></div>
      <div><CustomButton count={count**2}  setCount = {setCount} ></CustomButton></div>
      <div><CustomButton count={count**2}  setCount = {setCount} ></CustomButton></div>
      <div><CustomButton count={count**2}  setCount = {setCount} ></CustomButton></div>
      <div><CustomButton count={count**2}  setCount = {setCount} ></CustomButton></div>
      <div><CustomButton count={count**2}  setCount = {setCount} ></CustomButton></div>
      <div><CustomButton count={count**2}  setCount = {setCount} ></CustomButton></div>
      <div><CustomButton count={count**2}  setCount = {setCount} ></CustomButton></div>
      <div><CustomButton count={count**2}  setCount = {setCount} ></CustomButton></div>
      <div><CustomButton count={count**2}  setCount = {setCount} ></CustomButton></div>
      <div><CustomButton count={count**2}  setCount = {setCount} ></CustomButton></div>

      
      
      
    </div>
  )
}

function CustomButton(props){

  function buttonHandler() {
    props.setCount(props.count + 1)
  }

  return <button onClick={buttonHandler}>
    Counter {props.count}
  </button>
}

export default App
