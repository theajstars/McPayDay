import Register from "./Components/Auth/Register";
import "./Assets/CSS/All.css";
import socketClient from 'socket.io-client'
const server = 'http://localhost:8080'
function App() {
    const socket = socketClient(server)
    socket.on('connection', () => {
        console.log("Connected with the backend!")
    })
  return (
    <>
      <Register />
    </>
  );
}

export default App;
