import { useState } from "react";

export default function Form({ onAddItem }) {
  const items = Array.from({ length: 20 }, (_, index) => index + 1);
  const [description, setdescription] = useState("");
  const [quantity, setquantity] = useState(1);

  function handleAddItem(newItem) {
    onAddItem(newItem);
    setdescription("");
    setquantity(1);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!description.trim()) return;

    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };

    handleAddItem(newItem);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 🤩✈️ trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setquantity(Number(e.target.value))}
      >
        {items.map((number) => {
          return (
            <option key={number} value={number}>
              {number}
            </option>
          );
        })}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setdescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
