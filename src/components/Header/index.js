import React, { useContext, useState, useEffect } from "react";
import "./styles.css";
import Logo from "../../assets/Logo.png";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../../contexts/MainContext";

export default function Header() {
  const navigate = useNavigate();
  const { backButtom, setBackButtom } = useContext(MainContext);

  function nav() {
    setBackButtom(false);
    navigate("/products");
  }
  return (
    <div className="topBar">
      <img className="logoImg" src={Logo} alt="logo" />
      <p>Lauret Moda Intima</p>
      <button
        className="backButtom"
        onClick={nav}
        style={{ display: backButtom ? "block" : "none" }}
      >
        <FaArrowLeft></FaArrowLeft>
        <label>voltar</label>
      </button>
    </div>
  );
}
