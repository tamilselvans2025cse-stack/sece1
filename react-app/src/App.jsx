import React from "react";

function App() {
  return (
    <div>
      <h2>Registration Form</h2>

      <form>
        <label>Name:</label>
        <input type="text" placeholder="Enter your name" />

        <br />
        <br />

        <label>Email:</label>
        <input type="email" placeholder="Enter your email" />

        <br />
        <br />

        <label>Password:</label>
        <input type="password" placeholder="Enter password" />

        <br />
        <br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;
