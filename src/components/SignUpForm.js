import axios from "axios";
import { useState } from "react";

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState(false);
  // const [] = useState ()

  const handleSubmit = async (event) => {
    console.log(email);
    try {
      event.preventDefault();
      if (password !== confirmPassword) {
        setErrorPassword(true);
        //alert mdp incorrects
      } else {
        setErrorPassword(false);
        console.log([username, email, password]);
        const response = await axios.post(
          "http://localhost:3001/users/signup",
          {
            username: username,
            email: email,
            password: password,
          }
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <div>
        <span>Username</span>
        <input
          value={username}
          placeholder="Bruce Banner"
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div>
        <span>Email</span>
        <input
          value={email}
          type="email"
          placeholder="theHulk@avengers.io"
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <span>Password</span>
        <input
          className={errorPassword && "error"}
          value={password}
          type={"password"}
          placeholder="haIlHYdrA3945"
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div>
        <span>Confirm password</span>
        <input
          className={errorPassword && "error"}
          value={confirmPassword}
          type={"password"}
          placeholder="haIlHYdrA3945"
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
      </div>
      {errorPassword && (
        <div>
          <span>Les mots de passe ne sont pas identiques</span>
        </div>
      )}
      <button onClick={handleSubmit}>S'isncire</button>
      {/* <input className="submit-button" value="Register" type="submit" /> */}
    </form>
  );
};

export default SignUpForm;
