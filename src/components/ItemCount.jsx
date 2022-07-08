import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

const ItemCount = ({ stock, initial, onAdd, noStock, id }) => {
  // console.log('id: ', id);
  const [count, setCount] = useState(initial);
  const incrementar = () => {
    setCount(count + 1);
  };
  const decrementar = () => {
    setCount((valAnterior) => (valAnterior > 0 ? count - 1 : count));
  };
  return (
    <>
          <Stack direction="horizontal" gap={2} className="col-md-5 mx-auto">
          <Button variant="outline-secondary" onClick={decrementar}>
              -
            </Button>
            <h3 className="mx-auto">{count}</h3>
            <Button variant="outline-secondary" onClick={incrementar}>
              +
            </Button>
            
          </Stack>
             <Button id={id}
           style={{ marginTop: "10px", width: '100%' }}
            variant="outline-info"
            onClick={(e) => {
              console.log('e ', e)
            count <= stock ? onAdd(count) : noStock()
            }}
          >
            Agregar al carrito
          </Button>
    </>
  );
};
export default ItemCount;
