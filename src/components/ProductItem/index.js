import React from "react";
import "./styles.css";

export default function ProductItem({ prod }) {
  return (
    <li className="dev-item">
      <div>
        <div className="containtItem">
          <header>
            {/* <img src={prod.avatar_url} alt={prod.name} /> */}
            <div className="user-info">
              <strong>{prod.name}</strong>
              <span>{prod.quantity}</span>
            </div>
          </header>
          <p>{prod.description}</p>
          <p className="value">{prod.value}</p>
          {/* <a href={`https://github.com/${dev.github_username}`}>
        Acessar perfil no Github
      </a> */}
        </div>
        <div className="actions"> teste</div>
      </div>
    </li>
  );
}
