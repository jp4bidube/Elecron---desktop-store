import React, { useEffect } from "react";
import "./styles.css";

export default function Message() {
  useEffect(() => {}, []);

  return (
    <div className="Toastify">
      <div className="Toastify__toast-container Toastify__toast-container--top-right">
        <div
          className="Toastify__toast Toastify__toast--success"
          // style="transform: translateX(0px); opacity: 1; transition: transform 0.2s ease 0s, opacity 0.2s ease 0s;"
        >
          <div role="alert" class="Toastify__toast-body">
            Pulando para próxima aula em 3 segundos
          </div>
        </div>
      </div>
    </div>
  );
}
