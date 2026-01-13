
import 'bootstrap/dist/css/bootstrap.min.css'
import { useFetchData } from './hook/useFetchData'
import Input from './component/Input'
import Button from './component/Button'
import './App.css'
import Todo from './component/Todo'


function App() {


  const [load, data, fail] = useFetchData()


 
  return(
    <div className="container mt-4"> 
  
      <span>  { !load && 'Chargement ...'}   </span>

      <div className='Add-zone gap-3'>
        <Input />
        <Button title='Ajouter' />

      </div>
      
      <div> 
          <Todo />
      </div>
      <div>{fail}</div>
    
    </div>
  )
}

export default App
