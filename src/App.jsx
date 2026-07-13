/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'*/
import { useState } from "react";
import Footer from "./Footer.jsx";
import User from "./User.jsx";
import Login from "./auth.jsx";
import Registration from "./Registration.jsx";

let name = "prayag";

let age = 20;
let hobbies = ["reading", "editing", "traveling"];

function App() {
  const [status, setStatus] = useState(false);
  const [username, setUsername] = useState("");

  return (
    <>
      <Footer />
      <User name={name} age={age} hobbies={hobbies} />
                                                                                                            
      <Login
        status={status}
        setStatus={setStatus}
        username={username}
        setUsername={setUsername}
      />

      <Registration/>
    </>
  );
}

export default App;
