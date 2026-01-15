
import 'bootstrap/dist/css/bootstrap.min.css'
import { useFetchData } from './hook/useFetchData'
import Input from './component/Input'
import Button from './component/AddButton'
import './App.css'
import Todo from './component/Todo'
import ListTodos from './component/ListTodos'
import { useEffect, useState } from 'react'


function App() {


  console.log('App', 'render')
  const [load, data, fail] = useFetchData()
  const [inputLibTodo , setInputLibTodo] = useState('')

    const [todos, setTodos] = useState(()=>{

        const saved = localStorage.getItem('mytodos')
        return saved ? JSON.parse(saved) : []
    })

    useEffect(()=>{
      if(data && todos.length==0 && !localStorage.getItem('mytodos')){
        // attribution Manuelle des todos via data 
       const alltodos = data.map( todo => {todo.id.toString(), todo.title})
       setTimeout(()=>{
        setTodos(alltodos)
       },1)
       localStorage.setItem('mytodos', JSON.stringify(alltodos))
     }
    },[data, todos.length])
    
  



  return(
    <div className="container mt-4"> 
  
       { load && <div className='alert alert-info'>Chargement ...</div>}   

      <div className='Add-zone gap-3'>
        <Input value={inputLibTodo} setValue={setInputLibTodo} />
        <Button title='Ajouter' titleToto ={inputLibTodo} handleTodos={setTodos} />

      </div>
      
      <div> 
          { data && <ListTodos todos={todos} handleTodos={setTodos} />}
      </div>
      {fail && <div className='alert alert-danger'>{fail}</div>}
    
    </div>
  )
}

export default App
