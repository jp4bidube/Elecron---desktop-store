import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Routes from "../routes";
import Header from "../components/Header/index";
import Footer from "../components/Footer/index";
import Message from "../components/Message/index";

export default function App() {
  return (
    <Router>
      <Header />
      <Message />
      <Routes />
      <Footer />
    </Router>
  );
}
