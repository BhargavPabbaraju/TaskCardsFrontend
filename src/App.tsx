import { useState , useEffect } from 'react'
import './App.css'
import { getSampleMessage } from './api'

function App() {
  const [msg , setMsg] = useState("");

  useEffect(()=>{
    getSampleMessage()
    .then((message) => setMsg(message))
    .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div style={{padding: "2rem", fontSize: "1.5rem" }}>
        {msg || "Loading..."}
      </div>
    </>
  )
}

export default App;
