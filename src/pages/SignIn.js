import SignInForm from "../components/SignInForm";
import "../assets/CSS/SignIn.css";
const SignIn = ({ setUser }) => {
  return (
    <div>
      <h1>Se connecter</h1>
      <SignInForm />
    </div>
  );
};

export default SignIn;
