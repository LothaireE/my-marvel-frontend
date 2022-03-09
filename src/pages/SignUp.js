import { useState } from "react";
// import SignUp from "../assets/CSS/SignUp.css";
import "../assets/CSS/SignUp.css";

import SignUpForm from "../components/SignUpForm";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState(false);
  // const [] = useState ()
  console.log(username);
  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      if (password !== confirmPassword) {
        setErrorPassword(true);
        //alert mdp incorrects
      } else {
        setErrorPassword(false);
        console.log([username, email, password]);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h1>Créer un compte</h1>
      <SignUpForm
        handleSubmit={handleSubmit}
        setUsername={setUsername}
        setEmail={setEmail}
        setPassword={setPassword}
        setConfirmPassword={setConfirmPassword}
        username={username}
        email={email}
        confirmPassword={confirmPassword}
        errorPassword={errorPassword}
      />
    </div>
  );
};

export default SignUp;
