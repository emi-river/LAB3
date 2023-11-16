import { useEffect, useState } from "react";
import "./App.css";
import "./index.css";

function App() {
  const [person, setPerson] = useState("");

  useEffect(() => {
    fetch("/api/movies")
      .then((response) => response.json())
      .then((result) => {
        setPerson(result);
        console.log(person);
      });
  }, []);

  return (
    <>
      <div className="container">
        <div className="background-icon"></div>
        <div className="signin-container">
          <h1 className="signin-title">This is Social Tea</h1>
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Placeholder" />
          <div className="forgot-password-text">
            <p>Forgot password?</p>
          </div>
          <div className="signin-action-btns">
            <button>Sign In</button>
            <button>Register</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
