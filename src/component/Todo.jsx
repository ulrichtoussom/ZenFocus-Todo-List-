
import '../styleComponent/Todo.css'
import SuppButton from './SuppButton'


export default function Todo({id , title, handleTodos}){

    return(
        <div className="todo" id={id}>
            <span> {title} </span>
            <SuppButton title='Supprimer' todoId={id} handleTodos={handleTodos} />
        </div>
    )
}