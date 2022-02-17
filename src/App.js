import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import de mes pages
import Home from "./pages/Home";
import Header from "./components/Header";

const apiUrl = "https://my-marvel-backend-lothaire.herokuapp.com";
// const apiUrl = "http://localhost:3001";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home apiUrl={apiUrl} />} />
      </Routes>
    </Router>
  );
}

export default App;
