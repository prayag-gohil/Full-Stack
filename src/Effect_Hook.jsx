import {useState,useEffect} from 'react';
import  Button  from 'react-bootstrap/Button';
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
            <Button onClick={increment}>Increment</Button>

            <Button onClick={decrement}>stock</Button>
            <p>Stock: {stock}</p>

            <Button onClick={()=>mount()}>Mount</Button>
            <Button onClick={()=>unmount()}>Unmount</Button>
        </>
    )
}