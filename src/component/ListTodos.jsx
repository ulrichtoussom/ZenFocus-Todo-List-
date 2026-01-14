import Todo from "./Todo"




export default function ListTodos({todos}){


    return(

        <div className="list-todo">

           {
            todos.map( todo => {
                return <Todo key={todo.id} id={todo.id} title={todo.title} />
            })
           }

          
        </div>

    )
}