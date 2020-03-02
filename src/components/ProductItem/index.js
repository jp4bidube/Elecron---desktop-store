import React from "react";
import "./styles.css";
import { GoTrashcan, GoPencil } from "react-icons/go";

export default function ProductItem({ prod, onClick, onSubmit }) {
  async function handleEdit(e) {
    onClick(prod.id);
  }

  async function handleDelete(e) {
    onSubmit(prod.id);
  }

  return (
    <li className="dev-item">
      <div>
        <div className="containtItem">
          <header>
            {/* <img src={prod.avatar_url} alt={prod.name} /> */}
            <div className="user-info">
              <strong>{prod.name}</strong>
              <span>Quantidade: {prod.quantity}</span>
            </div>
          </header>
          <p>Descrição: {prod.description}</p>
          <p className="value">Valor: R${prod.value},00</p>
          {/* <a href={`https://github.com/${dev.github_username}`}>
        Acessar perfil no Github
      </a> */}
        </div>
        <div className="actions">
          <GoPencil
            title="Editar produto"
            className="editButton"
            onClick={handleEdit}
          ></GoPencil>
          <GoTrashcan
            onClick={handleDelete}
            title="Remover produto"
            className="deleteButton"
          ></GoTrashcan>
        </div>
      </div>
    </li>
  );
}
