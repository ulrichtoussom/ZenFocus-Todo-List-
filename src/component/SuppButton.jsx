


export default function SuppButton({title, todoId, handleTodos }){

    const Delete = function(){

        const todos =  JSON.parse(localStorage.getItem('mytodos'))
        const filterTodo = todos.filter(todo =>todo.id !== todoId)
        localStorage.setItem('mytodos', JSON.stringify(filterTodo)) 
        handleTodos(JSON.parse(localStorage.getItem('mytodos')))

    }

    return(
        <button 
         className="btn btn-danger" 
         type="button"
         onClick={Delete}
         
         >{title}</button>
    )
}