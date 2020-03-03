import React from "react";
import "./styles.css";
import Logo from "../../assets/Logo.png";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  function nav() {
    navigate("/");
  }
  return (
    <div className="topBar">
      <img className="logoImg" src={Logo} alt="logo" />
      <p>Lauret moda Intima</p>
      <button className="backButtom" onClick={nav}>
        <FaArrowLeft></FaArrowLeft>
        <label>voltar</label>
      </button>
    </div>
  );
}
