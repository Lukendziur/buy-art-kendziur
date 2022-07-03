import React, {useState, useEffect} from "react"

const Clock = () => {
    // El estado se actualiza a partir de un evento por lo general.
    // El "constructor siempre estará antes del return"

    const [val, setVal] = useState(0) // se inicializa la cuenta en 0. 
    const [time, setTime] = useState(null)

    // console.log(cuenta) // retorna un array [0, f] lo primero es el estado, lo segundo es el "setter"
    // console.log(val, setVal);

    const tick = () =>{
        // eslint-disable-next-line no-unused-expressions
        setVal(val + 1)|
        setTime(new Date())
    }

    // useEffect(() => {
    //     console.log('montado');
    //     return function(){
    //         console.log('desmontado');
    //     }
    // }, [])
    useEffect(() => { // eso es para ver si el componente se va a actualizar o no
        console.log('actualizado');
       
    }, [val])

    return (
        <>
            <button onClick={()=> tick()}>Count + 1</button>
            <h2> {val}</h2>
            {/* <button onClick={()=> setVal(val - 1)}>Restar</button> */}
            {/* <button onClick={() =>tick()}>Tick</button> */}
           {time != null && <h2> {time.toLocaleTimeString()}</h2>}



        </>
    )


}











// COMPONENTE BASADO EN CLASES  
// class Clock extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = {date: new Date(), count: 0}

//     }

//     tick(){
//         this.setState({
//             ...this.state, // 'Rellená este objeto (tick) con todas las propiedades y no los modifiques. Luego, se vuelve a setear/sobreescribir la hora
//             date: new Date(),
//         })
//     }

//     count(){
//         this.setState({
//             ...this.state,
//             count: this.state.count + 1
//         })
//     }

//     render(){
//         return(
//             <>
//             <h1 onClick={()=> this.tick()}>Date!</h1>
//             <button onClick={()=> this.count()}>Count!</button>

//             <h2>It is {this.state.date.toLocaleTimeString()}</h2>
//             <h2>It is {this.state.count}</h2>

//             </>
//         )
//     }
// }



export default Clock