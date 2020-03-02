import React, { useState, useEffect } from "react";
import "../styles/global.css";
import "./App.css";
import "../styles/Sidebar.css";
import "../styles/Main.css";

import api from "../services/api";
import ProductItem from "../components/ProductItem";
import Productform from "../components/ProductForm";

export default function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [title, setTitle] = useState("Cadastrar");
  const [message, setMessage] = useState("");
  const [showMess, setShowMess] = useState(false);

  async function loadProducts() {
    const response = await api.get("/products");
    setProducts(response.data.products.rows);
    setPage(response.data.page);
    setTotalPage(response.data.totalPages);
  }

  useEffect(() => {
    loadProducts();
  }, []); // eslint-disable-line

  useEffect(() => {
    let ant = document.getElementById("ant");
    let prox = document.getElementById("prox");

    if (page === 0) {
      ant.style.backgroundColor = "rgba(233, 30, 99, 0.3)";
    } else {
      ant.style.backgroundColor = "rgba(233, 30, 99, 0.7)";
    }
    if (page === totalPage) {
      prox.style.backgroundColor = "rgba(233, 30, 99, 0.3)";
    } else {
      prox.style.backgroundColor = "rgba(233, 30, 99, 0.7)";
    }
  }, [page, totalPage, products]);

  useEffect(() => {
    setTimeout(() => {
      setShowMess(false);
    }, 3000);
  }, [message]);

  async function handleAddDev(data) {
    await api.post("/products", data);

    loadProducts();
    setMessage("Producto cadastrado com sucesso!");
    setShowMess(true);
  }

  async function handleEdit(id) {
    const response = await api.get(`/products/${id}`);
    console.log(response.data);
    setTitle("Editar");
  }

  async function handleDelete(id) {
    const response = await api.delete(`/products/${id}`);
    console.log(response.data);

    setMessage(response.data);
    setShowMess(true);
    loadProducts();
  }

  function handleNext() {
    let prox = document.getElementById("prox");
    if (page === totalPage) {
      prox.style.backgroundColor = "rgba(233, 30, 99, 0.3)";
      return;
    } else {
      prox.style.backgroundColor = "rgba(233, 30, 99, 0.7)";
      async function loadProducts() {
        const response = await api.get(`/products?page=${page + 1}`);
        setProducts(response.data.products.rows);
        setPage(page + 1);
      }
      loadProducts();
    }
  }

  function handlePrev() {
    let ant = document.getElementById("ant");
    if (page === 0) {
      ant.style.backgroundColor = "rgba(233, 30, 99, 0.3)";
      return;
    } else {
      ant.style.backgroundColor = "rgba(233, 30, 99, 0.7)";
      async function loadProducts() {
        const response = await api.get(`/products?page=${page - 1}`);
        setProducts(response.data.products.rows);
        setPage(response.data.page);
      }
      loadProducts();
    }
  }

  return (
    <div className="container">
      <div className="topBar" />
      <div
        id="message"
        className="notification"
        style={{ display: showMess ? "block" : "none" }}
      >
        {message}
      </div>
      <div id="app">
        <aside>
          <strong>{title}</strong>
          <Productform onSubmit={handleAddDev} />
        </aside>
        <main>
          <ul>
            {products.map(prod => (
              <ProductItem
                prod={prod}
                key={prod.id}
                onClick={handleEdit}
                onSubmit={handleDelete}
              />
            ))}
          </ul>
          <div className="tableButtons">
            <buttom
              disabled={page === 0}
              id="ant"
              className="button"
              onClick={handlePrev}
            >
              Anterior
            </buttom>
            <buttom
              disabled={page === totalPage}
              id="prox"
              className="button"
              onClick={handleNext}
            >
              Próximo
            </buttom>
          </div>
        </main>
      </div>
      <div className="bottomBar">
        <p>Todos os direitos reservados ao JP Pica de mel!</p>
      </div>
    </div>
  );
}
