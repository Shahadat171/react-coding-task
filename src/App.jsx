import { useState } from "react";
import {  NavLink, Outlet } from "react-router-dom";
import Start from "./components/Start";
import Menu from "./components/Menu";
// import Menu from "./components/Menu";
// import Problem1 from "./components/Problem1";
// import Problem2 from "./components/Problem2";
// import Index from "./components/Start";


function App() {

  return (
  <>
  <Start></Start>
  <Menu></Menu>
  </>
);
}

export default App;
