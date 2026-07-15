import {useState} from 'react';

export default function Effect_Hook()
{
    //state variable
    const [count, setCount] = useState(0);
    function increment(){
        setCount(count+1);
    }
    function display(){
        console.log("useEffect Example");
    }
    display();
    return(
        <>
            <h1>useEffect Example</h1>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>

        </>
    )
}