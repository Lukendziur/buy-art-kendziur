import React from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ItemCount from "./ItemCount"
const ItemListContainer = ({greeting}) =>{
    return(
        <>
        {greeting}
        <ItemCount stock={5} initial={1} onAdd={(n) => toast.success(`${n} imágenes agregadas!`)
        
        }/>
  <ToastContainer />
        </>
    )
}

export default ItemListContainer