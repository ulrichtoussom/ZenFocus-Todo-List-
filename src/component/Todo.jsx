
import '../styleComponent/Todo.css'


export default function Todo({id , title}){


    return(
        <div className="todo">
            <span> {title} </span>
            <button id={id} type="button" className='btn btn-sm btn-danger'>supprimer</button>
        </div>
    )
}