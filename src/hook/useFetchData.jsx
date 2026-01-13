// Recuperation des Todo sur jsonPlaceholder 

import { useState } from "react";


export const useFetchData = function(options){

    const [data , setData] = useState()
    const [load , setLoad] = useState(false)
    const [fail , setFail] = useState('')

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

        setData(res)
        setLoad(true)
    })
    .catch(fail => {
        setFail(fail)
        console.log({fail})
    })



    return[load ,data, fail]
}