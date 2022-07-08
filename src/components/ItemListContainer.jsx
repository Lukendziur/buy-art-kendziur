import React, {useEffect, useState} from "react"
import 'react-toastify/dist/ReactToastify.css';
import ItemList from "./ItemList";

const ItemListContainer = ({greeting}) =>{
    
//     const task = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve(products);
//     }, 2000);
//  })
//  task.then(result => {
//     console.log(result);
//  })
const [todos, setTodos] = useState() // hook que almacena a los to dos
const fetchApi = async() => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    setTodos(data)
}

 useEffect(() =>{
    fetchApi()
 }, [])

    return(
        <>
        {greeting}
      {
        !todos ? 'Cargando...' : <ItemList items={todos} />
      }
        
        
        </>
    )
}

export default ItemListContainer