import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [gmail, setGmail] = useState("");
  const [phone, setPhone] = useState("");

  function submit(e) {
    e.preventDefault();

    if (name === "" || roll === "" || gmail === "" || phone === "") {
      alert("Please fill all fields");
    } else {
      alert("Registration successful!");
    }
  }

  return (
    <div>
      <h2>Registration Form</h2>

      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />

        <br />
        <br />

        <input
          type="text"
          placeholder="Enter Roll Number"
          onChange={(e) => setRoll(e.target.value)}
        />

        <br />
        <br />

        <input
          type="email"
          placeholder="Enter Gmail"
          onChange={(e) => setGmail(e.target.value)}
        />

        <br />
        <br />

        <input
          type="tel"
          placeholder="Enter Phone Number"
          onChange={(e) => setPhone(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;
