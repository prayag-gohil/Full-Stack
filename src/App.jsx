/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useState } from "react";
import Footer from "./Footer.jsx";
import User from "./User.jsx";
import Login from "./auth.jsx";
import Registration from "./Registration.jsx";
import Loop from "./Loop.jsx";
import Effect_Hook from "./Effect_Hook.jsx";

import Loginpage from "./Loginpage.jsx";*/
//import StudentRegistration from "./StudentRegistration.jsx";
//let name = "prayag";
import Headers from "./Header.jsx";
import Section from "./Section.jsx";
//let age = 20;
//let hobbies = ["reading", "editing", "traveling"];

function App() {
  //const [status, setStatus] = useState(false);
  //const [username, setUsername] = useState("");

  return (
    <>
     {/* <Footer />
      <User name={name} age={age} hobbies={hobbies} />
                                                                                                            
      <Login
        status={status}
        setStatus={setStatus}
        username={username}
        setUsername={setUsername}
      />

      <Registration/>
      <Loop/>
     <Loginpage/>
      <Effect_Hook/> 
     <Loginpage/>
     <StudentRegistration/>*/}
     <Headers/>
     <Section/>
    </>
  );
}

export default App;
