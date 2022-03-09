import React from "react";

const SignUpForm = (
  handleSubmit,
  setUsername,
  setEmail,
  setPassword,
  setConfirmPassword,
  username,
  email,
  password,
  confirmPassword,
  errorPassword
) => {
  console.log(username);
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
      <input className="submit-button" value="Register" type="submit" />
    </form>
  );
};

export default SignUpForm;
