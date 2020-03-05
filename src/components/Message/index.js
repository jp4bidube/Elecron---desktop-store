import React, { useEffect, useContext, useCallback, useState } from "react";
import { MainContext } from "../../contexts/MainContext";
import "./styles.css";

export default function Message() {
  const { message, setMessage, typeMsg, setTypeMsg } = useContext(MainContext);

  useEffect(() => {
    const style = msgStyle(typeMsg);
    document.getElementById("toastStyle").classList.add(style);
    const msg = document.getElementById("toast");
    if (message) {
      msg.style.display = "block";
      msg.classList.add("toast-anime");
      msg.style.animationPlayState = "running";
    }

    msg.addEventListener("animationend", () => {
      msg.style.display = "none";
      msg.classList.remove("toast-anime");
      setMessage("");
    });
  }, [message, setMessage, typeMsg]);

  function msgStyle(type) {
    switch (type) {
      case "default":
        type = "Toastify__toast--default";
        break;
      case "success":
        type = "Toastify__toast--success";
        break;
      case "error":
        type = "Toastify__toast--error";
        break;
      case "warning":
        type = "Toastify__toast--warning";
        break;
      case "info":
        type = "Toastify__toast--info";
        break;
      default:
        type = "Toastify__toast--default";
    }
    return type;
  }

  return (
    <div className="Toastify">
      <div
        id="toast"
        style={{ display: "none" }}
        className="Toastify__toast-container Toastify__toast-container--top-right"
      >
        <div id="toastStyle" className="Toastify__toast">
          <div role="alert" class="Toastify__toast-body">
            {message}
          </div>
        </div>
      </div>
    </div>
  );
}
