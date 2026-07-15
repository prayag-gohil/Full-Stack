import {useState,useEffect} from 'react';

export default function Effect_Hook()
{
    //state variable
    const [count, setCount] = useState(0);
    const [stock, setStock] = useState(20);

    function increment(){
        setCount(count+1);
    }
    function decrement(){
        setStock(stock-1);
    }
    function display(){
        console.log("useEffect Example");
    }
    useEffect(()=>{
        display();
    },[count,stock]);
    //display();
    return(
        <>
            <h1>useEffect Example</h1>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>

            <button onClick={decrement}>stock</button>
            <p>Stock: {stock}</p>
        </>
    )
}