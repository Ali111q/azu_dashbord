import "./App.css";
import react, { Component, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Home from "./component/home";
import Login from "./component/login";
import MyRouter from "./component/router";

function App() {
  // const Navigate = useNavigate();
  // useEffect(() => {
  //   
  //   logedIn
  //     ? Navigate("home")
  //     : Navigate("login");
  // });
const logedIn = localStorage.getItem("token")
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to={logedIn?'/':'/login'}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
