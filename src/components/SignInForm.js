import { useState } from "react";
import axios from "axios";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(email);
    try {
      event.preventDefault();
      const response = await axios.post("http://localhost:3001/users/signin", {
        email: email,
        password: password,
      });
    } catch (error) {
      // if (
      //   error.response &&
      //   (error.response.status === 400 || error.response.status === 401)
      // ) {
      //   setErrorMessage(true);
      // }
      setErrorMessage(true);
    }
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <div>
        <span>Email</span>
        <input
          value={email}
          type="email"
          placeholder="NatashaRomanov@avengers.io"
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <span>Password</span>
        <input
          value={password}
          type="password"
          placeholder="mOTherLANdwiLLRiseAGIn"
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      {errorMessage && (
        <div>
          <span>adresse mail et/ou mot de passe incorrects</span>
        </div>
      )}
      <input className="submit-button" value="Register" type="submit" />
    </form>
  );
};

export default SignInForm;
