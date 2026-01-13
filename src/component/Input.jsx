import { useEffect, useRef, useState } from "react"




export default function Input() {
  
    const[value , setValue] = useState('')
    const ref = useRef()

    useEffect(()=>{

        ref.current.focus()

    },[])
    

    return(
       <div className="form=check mb-3">

            <input type="text" 
                className="form-control" value={value} 
                onChange={(e) => setValue(e.target.value)}
                ref={ref}
            />

       </div>
    )
}