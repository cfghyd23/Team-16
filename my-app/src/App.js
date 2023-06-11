import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Register from "./components/Register";
import Admin from "./components/AdminHome";
import Login from "./components/Login";
import Issues from "./components/Issues";
import Announcements from "./components/Announcements";
import Donation from "./components/Donation";
import Tracking from "./components/Tracking";
import HomeOfAdmin from "./components/HomeOfAdmin";
import P2P from "./components/P2P";
import RaiseIssue from "./components/RaiseIssue";
import User from "./components/User";
// import NavbarPage from "./components/NavbarPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Admin" element={<Admin />}></Route>
        <Route path="/Home" element={<HomeOfAdmin />}></Route>
        <Route path="/User" element={<User />}></Route>
        {/* <Route path="/Navbar" element={<Navbar />}></Route> */}

        <Route path="/Issues" element={<Issues />}></Route>
        <Route path="/Announcements" element={<Announcements />}></Route>
        <Route path="/Donation" element={<Donation />}></Route>
        <Route path="/Tracking" element={<Tracking />}></Route>
        <Route path="/Peer-2-Peer" element={<P2P />}></Route>
        <Route path="/RaiseIssue" element={<RaiseIssue />}></Route>
      </Routes>
    </div>
  );
}

export default App;
