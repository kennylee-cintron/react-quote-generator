import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Header from "./components/views/Header";
import Quote from "./components/views/Quote";
import Signup from "./components/views/Signup";
import MessageBoard from "./components/views/MessageBoard";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Quote />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/messageBoard" element={<MessageBoard />} />
      </Routes>
    </div>
  );
}

export default App;
