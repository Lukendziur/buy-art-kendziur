import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";

const ItemCount = ({ stock, initial, onAdd, noStock }) => {
  const [count, setCount] = useState(initial);
  const incrementar = () => {
    setCount(count + 1);
  };
  const decrementar = () => {
    setCount((valAnterior) => (valAnterior > 0 ? count - 1 : count));
  };
  return (
    <>
      <Card style={{ width: "18rem" }} className="mx-auto">
        <Card.Img variant="top" src="./LogoPrincipal.png" />
        <Card.Body>
          <Card.Title>Contador</Card.Title>
          <Card.Text>
            Utilizo la card de lo que serán los productos para mostrar el contador
          </Card.Text>
          <Stack direction="horizontal" gap={2} className="col-md-5 mx-auto">
          <Button variant="outline-secondary" onClick={decrementar}>
              -
            </Button>
            <h3 className="mx-auto">{count}</h3>
            <Button variant="outline-secondary" onClick={incrementar}>
              +
            </Button>
            
          </Stack>
             <Button
           style={{ marginTop: "10px", width: '100%' }}
            variant="outline-info"
            onClick={() => {
            //   count <= stock && onAdd(count);
            count <= stock ? onAdd(count) : noStock()
            }}
          >
            Agregar al carrito
          </Button>
           
        </Card.Body>
      </Card>
    </>
  );
};
export default ItemCount;
