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

  function clearList() {
    if (list.length === 0) {
      alert("There are no items in the list to be cleared");
      return;
    }

    const confirm = window.confirm(
      "Doing this will remove all the items for the list. are you sure you want to do that?"
    );

    if (confirm) setlist([]);
  }

  function toggleItem(id) {
    setlist((list) =>
      list.map((i) => (i.id === id ? { ...i, packed: !i.packed } : i))
    );
  }

  function getItemCount() {
    return list.reduce((sum, item) => sum + item.quantity, 0);
  }

  function getPackedCount() {
    return list
      .filter((i) => i.packed)
      .reduce((sum, item) => sum + item.quantity, 0);
  }

  return (
    <div className="App">
      <Logo />
      <Form onAddItem={addItem} />
      <PackingList
        list={list}
        onDeleteItem={deleteItem}
        onToggleItem={toggleItem}
        onClearList={clearList}
      />
      <Stats itemCount={getItemCount()} packedCount={getPackedCount()} />
    </div>
  );
}

export default App;
