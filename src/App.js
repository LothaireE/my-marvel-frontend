import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

// import de mes pages
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import Character from "./pages/Character";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import { useState } from "react";
import Cookies from "js-cookie";

// const apiUrl = "https://my-marvel-backend-lothaire.herokuapp.com";
const apiUrl = "http://localhost:3001";

function App() {
  // const [token, setToken] = useState(Cookies.get("userToken") || null);

  // const setUser = (token) => {
  //   if (token) {
  //     Cookies.set("userToken", token, { expires: 10 });
  //   } else {
  //     Cookies.remove("userToken");
  //   }
  //   setToken(token);
  // };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home apiUrl={apiUrl} />} />
        <Route path="/characters" element={<Characters apiUrl={apiUrl} />} />
        <Route path="/comics" element={<Comics apiUrl={apiUrl} />} />
        <Route path="/character/:id" element={<Character apiUrl={apiUrl} />} />
        <Route path="/signup" element={<SignUp apiUrl={apiUrl} />} />
        <Route path="/signin" element={<SignIn apiUrl={apiUrl} />} />
      </Routes>
    </Router>
  );
}

export default App;
