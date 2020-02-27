import React, { useState } from "react";

export default function Productform({ onSubmit }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [value, setValue] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    await onSubmit({
      name,
      description,
      quantity,
      value
    });

    setName("");
    setDescription("");
    setQuantity("");
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-block">
        <label htmlFor="github_username">Nome do Produto</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </div>

      <div className="input-block">
        <label htmlFor="techs">Descrição do produto</label>
        <input
          type="text"
          name="description"
          id="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />
      </div>

      <div className="input-group">
        <div className="input-block">
          <label htmlFor="latitude">Quantidade</label>
          <input
            type="number"
            name="quantity"
            id="latitquantityude"
            value={quantity}
            onChange={e => setQuantity(e.target.value)}
            required
          />
        </div>

        <div className="input-block">
          <label htmlFor="longitude">Valor</label>
          <input
            type="number"
            name="value"
            id="value"
            value={value}
            onChange={e => setValue(e.target.value)}
            required
          />
        </div>
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
}
