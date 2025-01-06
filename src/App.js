import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Pair of Socks", quantity: 12, packed: false },
  { id: 3, description: "T-shirts", quantity: 12, packed: true },
];

function App() {
  const [list, setlist] = useState([...initialItems]);

  return (
    <div className="App">
      <Logo />
      <Form setList={setlist} />
      <PackingList list={list} setList={setlist} />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🎋 Far Away 👜</h1>;
}

function Form({ setList }) {
  const items = Array.from({ length: 20 }, (_, index) => index + 1);
  const [description, setdescription] = useState("");
  const [quantity, setquantity] = useState(1);

  function handleSubmit(event) {
    event.preventDefault();

    if (!description.trim()) return;

    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };

    setList((list) => [...list, newItem]);

    setdescription("");
    setquantity(1);
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

function PackingList({ list, setList }) {
  return (
    <div className="list">
      <ul>
        {list.map((item) => (
          <Item key={item.id} item={item} setList={setList} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, setList }) {
  return (
    <li>
      <input type="checkbox" checked={item.packed} readOnly />
      <span style={{ textDecoration: item.packed ? "line-through" : "none" }}>
        {item.quantity} {item.description}
      </span>
      <button
        onClick={() => setList((list) => list.filter((i) => i.id !== item.id))}
      >
        ❌
      </button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>
        🧳 You have X items on your list, and you have already packed X (X%)
      </em>
    </footer>
  );
}

export default App;
