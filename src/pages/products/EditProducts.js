import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./styles.css";
import Productform from "../../components/ProductForm";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { store } from "react-notifications-component";

export default function EditProducts() {
  const { id } = useParams();
  const navigate = useNavigate();

  async function handleUpdateProduct(data) {
    await api
      .put(`products/${id}`, data)
      .then(res => {
        store.addNotification({
          title: "Sucesso!",
          message: `Produto ${res.data.name} foi alterado com sucesso!`,
          type: "success",
          insert: "top",
          container: "top-right",
          animationIn: ["animated", "slideIn"],
          animationOut: ["animated", "fadeOut"],
          dismiss: {
            duration: 4000,
            onScreen: true
          }
        });
        navigate("/");
      })
      .catch(error => {
        const message = "Erro ao tentar alterar produto";
        store.addNotification({
          title: "Erro!",
          message: `${error.data ? error.data : message}`,
          type: "danger",
          insert: "top",
          container: "top-right",
          animationIn: ["animated", "slideIn"],
          animationOut: ["animated", "fadeOut"],
          dismiss: {
            duration: 4000,
            onScreen: true
          }
        });
      });
  }

  return (
    <div id="app">
      <aside>
        <strong>Editar</strong>
        <Productform id={id} onSubmit={handleUpdateProduct} />
      </aside>
    </div>
  );
}
