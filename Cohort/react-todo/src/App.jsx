import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([{
    title: 'Learn React',
    description : 'Learn React from scratch',
    completed: false
  },{
    title: 'Learn Vite',
    description : 'Learn Vite from scratch',
    completed: false
  }]);

  function addTodo(){
    setTodos([...todos, {
      title: 'New Todo',
      description: 'New Todo Description',
      completed: false
    }])
  }

  return (
    <div>
      <button onClick={addTodo}>Add a random todo</button>
      {
        todos.map(function(todo){
          return <Todo title={todo.title} description={todo.description} />
        })
      }
    </div>
  )
}



function Todo(props){
  return(
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <button >Mark as completed</button>
    </div>
  )
}

export default App
