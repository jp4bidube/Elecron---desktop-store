import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Routes from "../routes";
import Header from "../components/Header/index";
import Footer from "../components/Footer/index";
import Message from "../components/Message/index";

import { MainProvider } from "../contexts/MainContext";

export default function App() {
  return (
    <MainProvider>
      <Router>
        <Header />
        <Message />
        <Routes />
        <Footer />
      </Router>
    </MainProvider>
  );
}
