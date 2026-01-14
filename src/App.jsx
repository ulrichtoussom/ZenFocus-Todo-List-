
import 'bootstrap/dist/css/bootstrap.min.css'
import { useFetchData } from './hook/useFetchData'
import Input from './component/Input'
import Button from './component/Button'
import './App.css'
import Todo from './component/Todo'
import ListTodos from './component/ListTodos'
import { useState } from 'react'


function App() {

  const [load, data, fail] = useFetchData()
  const [inputLibTodo , setInputLibTodo] = useState('')

  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('mytodos')))

  console.log('App', todos)


  return(
    <div className="container mt-4"> 
  
       { load && <div className='alert alert-info'>Chargement ...</div>}   

      <div className='Add-zone gap-3'>
        <Input value={inputLibTodo} setValue={setInputLibTodo} />
        <Button title='Ajouter' titleToto ={inputLibTodo} handleTodos={setTodos} />

      </div>
      
      <div> 
          { data && <ListTodos todos={todos} />}
      </div>
      {fail && <div className='alert alert-danger'>{fail}</div>}
    
    </div>
  )
}

export default App
