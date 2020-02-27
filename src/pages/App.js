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

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get("/products");
      setProducts(response.data.rows);
      console.log(products);
    }
    loadProducts();
  }, []); // eslint-disable-line

  async function handleAddDev(data) {
    const response = await api.post("/products", data);

    setProducts([...products, response.data]);
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
      </main>
    </div>
  );
}
