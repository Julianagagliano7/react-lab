import { useState } from "react";

function App() {

  const [message, setMessage] = useState("Hello, Ju!")

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={() => {
        setMessage("The button was clicked")
      }}>Change message</button>
    </div>
  )
}

export default App;

