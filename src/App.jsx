import { useState } from 'react';
import { Routes, Route, useOutlet } from "react-router-dom";
import './App.css';
import Center from "../../myFinal/src/Components/Center/Center";
import Footer from "../../myFinal/src/Components/Footer/Footer";
import Header from "../../myFinal/src/Components/Header/Header";
import Landing from "../../myFinal/src/Components/Landing/Landing";
import Layout from "../../myFinal/src/Components/Layout/Layout";
import Left from "../../myFinal/src/Components/Left/Left";
import Nav from "../../myFinal/src/Components/Nav/Nav";
import Right from "../../myFinal/src/Components/Right/Right";

function App() {

  return (
    <>
    <div id="routeContainer">
      <Header />
      <div id="routeSubContent">
        <Left />
        <Center />
        <Right />
      </div>
      <Footer />
    </div>
    </>
  );
};

export default App;