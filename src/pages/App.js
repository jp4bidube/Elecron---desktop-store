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

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get("/products");
      setProducts(response.data.products.rows);
      setPage(response.data.page);
      setTotalPage(response.data.totalPages);
    }
    loadProducts();
  }, []); // eslint-disable-line

  useEffect(() => {
    let ant = document.getElementById("ant");
    let prox = document.getElementById("prox");

    if (page === 0) {
      ant.style.backgroundColor = "rgba(233, 30, 99, 0.3)";
      return;
    } else {
      ant.style.backgroundColor = "rgba(233, 30, 99, 0.7)";
    }
    if (page === totalPage) {
      prox.style.backgroundColor = "rgba(233, 30, 99, 0.3)";
      return;
    } else {
      prox.style.backgroundColor = "rgba(233, 30, 99, 0.7)";
    }
  }, [page, totalPage, products]);

  async function handleAddDev(data) {
    const response = await api.post("/products", data);

    setProducts([...products, response.data]);
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
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <Productform onSubmit={handleAddDev} />
      </aside>

      <main>
        <ul>
          {products.map(prod => (
            <ProductItem prod={prod} key={prod.id} />
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
  );
}
