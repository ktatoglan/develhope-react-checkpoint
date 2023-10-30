import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Address from "./components/Address";
import Details from "./components/Details";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/address/:id" element={<Address />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
