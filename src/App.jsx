import React from "react";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import Layout from "./Layout";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import NoPage from "./pages/noPage"; // Corrected component name

const year = new Date().getFullYear();

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />{" "}
            {/* Corrected component name */}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
