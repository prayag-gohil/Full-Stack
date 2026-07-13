/* 
full name - controlled
age - uncontrolled
email - uncontrolled
password - controlled
*/
import {useState,useRef } from "react";
export default function Registration(){
  //state variable
  const [fnm,setfnm]=useState("");
  const [password,setPassword]=useState("");


  // Reference variable
  const ageRef=useRef(null);
  const emailRef=useState("");

  //State variable to store value after submit
  //for controlled and uncontrolled
  const[FinalName,setFinalName]=useState("");
  const[FinalAge,setFinalAge]=useState(null);
  const[FinalEmail,setFinalEmail]=useState(null);
  const[FinalPassword,setFinalPassword]=useState("");
 function handle(e)
 {
    e.preventDefault();
    setFinalName(fnm);
    setFinalAge(ageRef.current.value);
    setFinalEmail(emailRef.current.value);
    setFinalPassword(password);
    alert("form Submitted");
    /*alert(ageRef.current.value);
    alert(emailRef.current.value);
    alert(password);*/
 }
  return (
    <>
        <form onSubmit={(e)=>ageRef(e.currentTarget.value)}>
        <label htmlFor="text">Enter Full Name </label>
        <input type="text" id="fnm" name="fnm" placeholder="Enter Full Name" value={fnm} onChange={(e)=>(setfnm(e.target.value))}required/>
        <br></br>
        <label htmlFor="number">Enter Age </label>
        <input type="number" id="age" name="age" placeholder="Enter Age" ref={ageRef} required/>
        <br></br>
        <label htmlFor="text">Enter Email </label>
        <input type="text" id="email" name="email" placeholder="Enter Email" ref={emailRef} required/>
        <br></br>
        <label htmlFor="password">Enter Password </label>
        <input type="password" id="password" name="password" placeholder="Enter Password" value={password} onChange={(e)=>(setPassword(e.target.value))}required/>
        <br></br>
       
        <button type="submit" onClick={handle}>Submit</button>
        </form>

        <h3>Full Name : {FinalName}</h3>
        <h3>Age :{FinalAge}</h3>
        <h3>Email :{FinalEmail}</h3>
        <h3>Password:{FinalPassword}</h3>
    </>
  );
}