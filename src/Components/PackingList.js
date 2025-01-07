export default function PackingList({ list, onDeleteItem, onToggleItem }) {
  return (
    <div className="list">
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
    </div>
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
      <input type="checkbox" checked={item.packed} onInput={handleToggle} />
      <span style={{ textDecoration: item.packed ? "line-through" : "none" }}>
        {item.quantity} {item.description}
      </span>
      <button onClick={handleDelete}>❌</button>
    </li>
  );
}
