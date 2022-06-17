import React, {useEffect, useState} from "react";
import logo from './logo.svg';
import './App.css';
import axios from "axios";

function App() {

  const [apiMsg, setMsg] = useState("No connection to Golang Backend :( ")

  useEffect(()=>{
      axios.get("api/ping")
          .then((response)=>{
              console.log(response)
              setMsg(response["data"]["msg"])
          })
          .catch((e)=>{
              console.log(e)
              setMsg("Couldn't connect to API")
          })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="#">
          {apiMsg}
        </a>
      </header>
    </div>
  );
}

export default App;
