import { useState } from "react";
import "./App.css";

function App() {
  const [inputMessage, setGreetingMessage] = useState("Greeting Message");
  return (
    <div className="App">
      <div className="greeting-container">{inputMessage}</div>
      <div className="buttons">
        <button onClick={() => setGreetingMessage("สวัสดี!")}>สวัสดี!</button>
        <button onClick={() => setGreetingMessage("Hi!")}>Hi!</button>
        <button onClick={() => setGreetingMessage("你好!")}>你好!</button>
      </div>
    </div>
  );
}

export default App;
