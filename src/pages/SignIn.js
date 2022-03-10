import SignInForm from "../components/SignInForm";
import "../assets/CSS/SignIn.css";
const SignIn = ({ setUser, setId }) => {
  return (
    <div>
      <h1>Se connecter</h1>
      <SignInForm setUser={setUser} setId={setId} />
    </div>
  );
};

export default SignIn;
