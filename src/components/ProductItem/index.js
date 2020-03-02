import React from "react";
import "./styles.css";
import { GoTrashcan, GoPencil } from "react-icons/go";

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
        <div className="actions">
          <GoPencil title="Editar produto" className="editButton"></GoPencil>
          <GoTrashcan
            title="Remover produto"
            className="deleteButton"
          ></GoTrashcan>
        </div>
      </div>
    </li>
  );
}
