import React, {useState} from "react";

export default function Hook() {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState("")

    function logColor(){
        console.log(
            `The color is ${color}`
        )
    }

    return (<div className='container' style={{backgroundColor:color,height:'100vh',margin:"0px",padding:"0px"}}>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
            Click me
        </button>
        &nbsp;
        <button onClick={() => setCount(count - 1)}>
            Click me to -
        </button>
        {console.log(count)}
        <input type="text" value={color} onChange={(e) => setColor(e.target.value)}/>
        <button onClick={logColor}>
            Click me to log color</button>
    </div>)
}