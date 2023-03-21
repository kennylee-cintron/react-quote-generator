import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Header from "./components/views/Header";
import Quote from "./components/views/Quote";
import Signup from "./components/views/Signup";

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Quotes to light us:</h1>

      <Routes>
        <Route path="/" element={<Quote />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
