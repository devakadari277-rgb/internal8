import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Home Page 🏥</h2>;
}

function Doctors() {
  return <h2>Doctors Page 👨‍⚕️</h2>;
}

function Patients() {
  return <h2>Patients Page 🧑‍🤝‍🧑</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Hospital App</h1>

        {/* Links */}
        <Link to="/">Home</Link> |{" "}
        <Link to="/doctors">Doctors</Link> |{" "}
        <Link to="/patients">Patients</Link>

        <hr />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/patients" element={<Patients />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;