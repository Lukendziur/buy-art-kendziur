import React from 'react'
import Card from "react-bootstrap/Card";
import ItemCount from './ItemCount';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Item = ({id, title, description, price, pictureUrl, stock}) => {

  return (
    <>
<div className='col-lg-4 d-flex align-items-stretch mt-2'>

     <Card  className="mx-auto text-center">
    <Card.Img variant="top" src={pictureUrl} style={{ padding: "60px"}} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
       {description}
      </Card.Text>
      <Card.Text>
       ${price}
      </Card.Text>
      <ItemCount stock={stock} initial={1} id={id} onAdd={(n) => toast.success(`${n} imágenes agregadas!`)} noStock={() => toast.error(`El stock supera la cantidad de unidades`)}   />
      <ToastContainer />    
    </Card.Body>
  </Card>
  </div>
  
  
 
  </>
    
  )
}

export default Item