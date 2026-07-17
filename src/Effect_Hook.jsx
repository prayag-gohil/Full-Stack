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

    function mount(){
        console.log("Component is mounted");
    }

    function unmount(){
        console.log("Component is unmounted");
    }
    useEffect(()=>{
        display();
    },[count,stock]);
    //display();

    //when component is mounted
    useEffect(()=>{
        mount();
    },[]);

    //when component is unmounted
    useEffect(()=>{
        return()=>{
            unmount();
        }
    },[]);
    return(
        <>
            <h1>useEffect Example</h1>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>

            <button onClick={decrement}>stock</button>
            <p>Stock: {stock}</p>

            <button onClick={()=>mount()}>Mount</button>
            <button onClick={()=>unmount()}>Unmount</button>
        </>
    )
}