// import SignUp from "../assets/CSS/SignUp.css";
import "../assets/CSS/SignUp.css";

import SignUpForm from "../components/SignUpForm";

const SignUp = ({ setUser, setId }) => {
  return (
    <div>
      <h1>Créer un compte</h1>
      <SignUpForm setUser={setUser} setId={setId} />
    </div>
  );
};

export default SignUp;
