import Register from "./Components/Auth/Register";
import "./Assets/CSS/All.css";
import socketIOClient from "socket.io-client";
import {useEffect} from "react";

const server = 'http://localhost:8080'
function App() {
    useEffect(() => {
        const socket = socketIOClient(server);
        socket.on("FromAPI", data => {
            console.log(data)
        });
    }, [])
  return (
    <>
      <Register />
    </>
  );
}

export default App;
