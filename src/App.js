import { useState } from "react";
import Form from "./Components/Form";
import Logo from "./Components/Logo";
import PackingList from "./Components/PackingList";
import Stats from "./Components/Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Pair of Socks", quantity: 12, packed: false },
  { id: 3, description: "T-shirts", quantity: 12, packed: true },
];

function App() {
  const [list, setlist] = useState([...initialItems]);

  function addItem(item) {
    setlist((list) => [...list, item]);
  }

  function deleteItem(id) {
    setlist((list) => list.filter((i) => i.id !== id));
  }

  return (
    <div className="App">
      <Logo />
      <Form onAddItem={addItem} />
      <PackingList list={list} onDeleteItem={deleteItem} />
      <Stats />
    </div>
  );
}

export default App;
