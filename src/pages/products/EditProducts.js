import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./styles.css";
import Productform from "../../components/ProductForm";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

export default function EditProducts() {
  const { id } = useParams();
  const navigate = useNavigate();

  async function handleUpdateProduct(data) {
    await api.put(`products/${id}`, data);
    navigate("/");
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
