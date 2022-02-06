import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/Login/Login";
import { Signup } from "./components/Signup/Signup";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<App />}> */}
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
