import React, { useState, useEffect, useContext } from "react";
import "../../styles/global.css";
import "./styles.css";
import "../../styles/Sidebar.css";
import "../../styles/Main.css";

import api from "../../services/api";
import ProductItem from "../../components/ProductItem";
import Productform from "../../components/ProductForm";
import { useNavigate } from "react-router-dom";

import { MainContext } from "../../contexts/MainContext";
import { store } from "react-notifications-component";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  const { setBackButtom } = useContext(MainContext);

  const navigate = useNavigate();

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

  async function handleAddDev(data) {
    await api
      .post("/products", data)
      .then(res => {
        loadProducts();
        store.addNotification({
          title: "Sucesso!",
          message: `Produto ${res.data.name} foi cadastrado com sucesso!`,
          type: "success",
          insert: "top",
          container: "top-right",
          animationIn: ["animated", "slideIn"],
          animationOut: ["animated", "fadeOut"],
          dismiss: {
            duration: 5000,
            onScreen: true
          }
        });
      })
      .catch(error => {
        const message = "Erro ao tentar cadastar produto";
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

  async function handleEdit(id) {
    navigate(`/product/edit/${id}`);
    setBackButtom(true);
  }

  async function handleDelete(id) {
    await api
      .delete(`/products/${id}`)
      .then(res => {
        loadProducts();
        store.addNotification({
          title: "Sucesso!",
          message: `${res.data}`,
          type: "success",
          insert: "top",
          container: "top-right",
          animationIn: ["animated", "slideIn"],
          animationOut: ["animated", "fadeOut"],
          dismiss: {
            duration: 5000,
            onScreen: true
          }
        });
      })
      .catch(error => {
        const message = "Erro ao tentar excluir produto";
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
    <>
      <div id="app">
        <aside>
          <strong>Cadastrar</strong>
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
    </>
  );
}
