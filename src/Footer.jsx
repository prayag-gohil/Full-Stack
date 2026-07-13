/* return statement can have ony one value when we use multiple div tag that use <></> or <Fragment></Fragment> */


/*export default function Footer()
{
    return(
        <> // we can write the <Fragment></Fragment> to use multiple div tag
        <div id="footer-class">
            <ul>
                <li>about us</li>
                <li>our project</li>
                
            </ul>
        </div>

        <div id="address">
                <p>address</p>
        </div>
        <div id="contact-us">
            <p>contact us</p>
        </div>
        </>
    );
}*/

/*
//anther way
//this is main component in this component we can call all sub component
export default function Footer()
{
    return(
        <>
            <About/>
            <OurProject/>
            <Address/>
        </>
    )
}
// this is sub component
function About(){
    return(
        <div>
            <p>about us </p>
        </div>
    )
}
// this is sub component
function OurProject()
{
    return(
        <div>
            <p>our project</p>
        </div>
    )
}
// this is sub component
function Address(){
    return(
        <div>
            <p>Address</p>
        </div>
    )
}
*/
/*
//class base component
import {Component} from "react";
class Footer extends Component{
    render()
    {
        return(
            <div className="erp">
                <p>SVGU ERP</p>
            </div>
        );
    }
}

export default Footer;*/
/*
let isloginIn="not Login";
const checked=()=>{ // using const key word making this function or component
    isloginIn="Login";
    console.log("Login status",isloginIn);
}
export const userkey1 = "userkey123";
export default function Footer()
{
   const userkey = "userkey";
    function handle()
    {
        alert("Button click");
    }
    return(
        <>
             <div>
                 <input type="text" value={userkey} placeholder="enter name " ></input>
                 <input type="text" value={userkey1} placeholder="enter name " ></input>
                <button onClick={handle}> click </button>

                <ul style={{
                    backgroundColor:'green'
                    
                }}>
                    <li>about</li>
                    <li>home</li>
                </ul>

                <button onClick={checked}>login</button>
                <label>Login status {isloginIn}</label>
            </div>
        </>
    )
  
}
*/
/*
import { useState } from "react";
export default function Footer()
{
    const [loginStatus,setLoginStatus]=useState("not login");

    const checked=()=>{
        setLoginStatus("Login");
    };

    const [count,setCount]=useState(1);

    const countInc=()=>{
            setCount(count+1);
    };

     const [count1,setCount1]=useState(10);
    const countDec=()=>{
        setCount1(count1-1);
    };
   
    return(
        <>
            <div>
                <button onClick={checked}>Login</button>
                <label>Login status {loginStatus}</label>

                <button onClick={countInc}>cart</button>
                <label>count {count}</label>

                <button onClick={countDec}>ADD to cart</button>
                <label>count dec {count1}</label>
                
            </div>
        </>
    )
}
*/
import { useState } from "react";

export default function Footer() {
  const [count, setCount] = useState(0);

  const updateCount=()=>{
    setCount(count+1);
  };

  return (
    <>
      <div>
        <button onClick={updateCount}>Update Count</button>
        <br /><br />
        <label>Increment Count: {count}</label>
        <br />
        <label>Decrement Count: {count-1}</label>
      </div>
    </>
  );
}