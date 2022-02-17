import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

// import de mes pages
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import Character from "./pages/Character";

const apiUrl = "https://my-marvel-backend-lothaire.herokuapp.com";
// const apiUrl = "http://localhost:3001";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home apiUrl={apiUrl} />} />
        <Route path="/characters" element={<Characters apiUrl={apiUrl} />} />
        <Route path="/comics" element={<Comics apiUrl={apiUrl} />} />
        <Route path="/character/:id" element={<Character apiUrl={apiUrl} />} />
      </Routes>
    </Router>
  );
}

export default App;
