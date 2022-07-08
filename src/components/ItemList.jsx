import React from 'react'
import Item from "./Item";

const ItemList = ({items}) => {

  return (
    
    <>   
   <div className="container d-flex justify-content-center align-items-center h-100 mt-5 mb-5">
    <div className="row">
            {
    items.map((item) => <Item id={item.id} title={item.title} description={item.description} price={item.price} pictureUrl={item.image} stock={item.rating.count} key={item.id}/>
    )
   }
      </div>
    </div>
    </>
    
  )
}

export default ItemList