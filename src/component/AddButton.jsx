
export default function Button({title, titleToto , handleTodos}) {

    
    function handleData(){
        if(titleToto){
            const id = Date.now() 
            const newTodo = {id:id, title:titleToto}
            const oldTodo = JSON.parse(localStorage.getItem('mytodos'))
            console.log('oldTodo',oldTodo)
            const allTodo = [...oldTodo,newTodo]
            console.log('allTodo',allTodo)
            localStorage.setItem('mytodos', JSON.stringify(allTodo))
            handleTodos(allTodo)
        }
        
    }


    return(

        <button type="button" 
            className={"btn btn-primary" }
            style={{height:'39px'}}
            onClick={()=>handleData?.()}
            
        > {title} </button>
    )
}