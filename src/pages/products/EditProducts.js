import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "./styles.css";
import Productform from "../../components/ProductForm";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../../contexts/MainContext";

export default function EditProducts() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { setMessage, setBackButtom, setTypeMsg } = useContext(MainContext);

  async function handleUpdateProduct(data) {
    await api
      .put(`products/${id}`, data)
      .then(res => {
        setMessage(`Produto ${res.data.name} foi cadastrado com sucesso!`);
        setTypeMsg("success");
        navigate("/products");
        setBackButtom(false);
      })
      .catch(error => {
        const message = "Erro ao tentar cadastar produto";
        setMessage(`${error.data ? error.data : message}`);
        setTypeMsg("error");
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
