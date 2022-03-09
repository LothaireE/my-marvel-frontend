// import SignUp from "../assets/CSS/SignUp.css";
import "../assets/CSS/SignUp.css";

import SignUpForm from "../components/SignUpForm";

const SignUp = ({ setUser }) => {
  return (
    <div>
      <h1>Créer un compte</h1>
      <SignUpForm />
    </div>
  );
};

export default SignUp;
