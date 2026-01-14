import { useState } from "react"



export default function Button({title, titleToto , handleTodos}) {

    console.log('Tache', titleToto)
    
    function handleData(){
        const id = Date.now() 
        const newTodo = {id:id, title:titleToto}
        const oldTodo = JSON.parse(localStorage.getItem('mytodos'))
        const allTodo = [...oldTodo,newTodo]
        console.log(allTodo)
        handleTodos(allTodo)
    }


    return(
        <button type="button" 
            className="btn btn-primary" 
            style={{height:'39px'}}
            onClick={()=>handleData()}
            
        > {title} </button>
    )
}