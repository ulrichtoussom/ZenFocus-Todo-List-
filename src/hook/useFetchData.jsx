// Recuperation des Todo sur jsonPlaceholder 

import { useEffect, useState } from "react";


export const useFetchData = function(options){

    const [data , setData] = useState()
    const [load , setLoad] = useState(true)
    const [fail , setFail] = useState('')

    useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/todos',{
            ...options,
            headers:{
                'content-type':'application/json',
                'accept':'application/json'
            }
        })
        .then(res => {
            if(res.status === 200){
                return res.json()
            }
            throw new Error( 'Impossible de se connecter au serveur ')
        
        })
        .then(res =>{ 
            if(!localStorage.getItem('mytodos')){
                //localStorage.clear()
                let formatData = []

                for (let i=0 ; i<=5; i++){
                    formatData = [...formatData,{id:res[i].id.toString(), title:res[i].title}]
                }

                // formatage des objets stocker dans la variable formatData en stringify (format json sous forme de string)

                localStorage.setItem('mytodos', JSON.stringify(formatData) )
            }
           
            setData(res)
            setLoad(false)
        })
        .catch(fail => {
            setFail(fail)
            setLoad(false)
            console.log({fail})
        })
    

    },[])

    

   
    return[load ,data, fail]
}