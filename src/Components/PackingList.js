import { useState } from "react";

export default function PackingList({
  list,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");

  function sortedList() {
    return list.slice().sort((a, b) => {
      switch (sortBy) {
        case "packed":
          return a.packed - b.packed;
        case "unpacked":
          return b.packed - a.packed;
        case "description":
          return a.description.localeCompare(b.description);
        default:
          return a.id - b.id;
      }
    });
  }

  return (
    <div className="list">
      <h2>Packing List</h2>
      <Items
        list={sortedList()}
        onDeleteItem={onDeleteItem}
        onToggleItem={onToggleItem}
      />

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option key="input" value="input">
            Sort by Input Order
          </option>
          <option key="packed" value="packed">
            Sort by Packed Items
          </option>
          <option key="unpacked" value="unpacked">
            Sort by Unpacked Items
          </option>
          <option key="description" value="description">
            Sort by Description
          </option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}

function Items({ list, onDeleteItem, onToggleItem }) {
  return (
    <ul>
      {list.map((item) => (
        <Item
          key={item.id}
          item={item}
          onDeleteItem={onDeleteItem}
          onToggleItem={onToggleItem}
        />
      ))}
    </ul>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  function handleDelete() {
    onDeleteItem(item.id);
  }

  function handleToggle() {
    onToggleItem(item.id);
  }

  return (
    <li>
      <input type="checkbox" checked={item.packed} onChange={handleToggle} />
      <span style={{ textDecoration: item.packed ? "line-through" : "none" }}>
        {item.quantity} {item.description}
      </span>
      <button onClick={handleDelete}>❌</button>
    </li>
  );
}
