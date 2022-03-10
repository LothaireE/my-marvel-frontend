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
import Favorites from "./components/Favorites";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faHandFist } from "@fortawesome/free-solid-svg-icons";
library.add(faHandFist);
{
  /* <FontAwesomeIcon icon="fa-solid fa-hand-fist" /> */
}

// const apiUrl = "https://my-marvel-backend-lothaire.herokuapp.com";
const apiUrl = "http://localhost:3001";

function App() {
  const [token, setToken] = useState(Cookies.get("userToken") || null);
  // const [id, setId] = useState(Cookies.get("userId")|| null);
  const [userId, setUserId] = useState(Cookies.get("userId") || null);

  const setUser = (token) => {
    if (token) {
      Cookies.set("userToken", token, { expires: 10 });
    } else {
      Cookies.remove("userToken");
    }

    setToken(token);
  };
  // console.log(setUser);

  const setId = (userId) => {
    if (userId) {
      Cookies.set("userId", userId, { expires: 10 });
    } else {
      Cookies.remove("userId");
    }
    console.log("userId==>", userId);
    setUserId(userId);
  };

  return (
    <Router>
      <Header setUser={setUser} setId={setId} token={token} userId={userId} />
      <Routes>
        <Route path="/" element={<Home apiUrl={apiUrl} />} />
        <Route
          path="/characters"
          element={
            <Characters setUser={setUser} setId={setId} apiUrl={apiUrl} />
          }
        />
        <Route
          path="/comics"
          element={<Comics setUser={setUser} setId={setId} apiUrl={apiUrl} />}
        />
        <Route
          path="/character/:id"
          element={
            <Character setUser={setUser} setId={setId} apiUrl={apiUrl} />
          }
        />
        <Route
          path="/signup"
          element={<SignUp setUser={setUser} setId={setId} apiUrl={apiUrl} />}
        />
        <Route
          path="/signin"
          element={<SignIn setUser={setUser} setId={setId} apiUrl={apiUrl} />}
        />
        <Route path="/favorites" element={<Favorites apiUrl={apiUrl} />} />
      </Routes>
    </Router>
  );
}

export default App;
