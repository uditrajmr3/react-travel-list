export default function PackingList({ list, onDeleteItem }) {
  return (
    <div className="list">
      <ul>
        {list.map((item) => (
          <Item key={item.id} item={item} onDeleteItem={onDeleteItem} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItem }) {
  function handleDelete() {
    onDeleteItem(item.id);
  }

  return (
    <li>
      <input type="checkbox" checked={item.packed} readOnly />
      <span style={{ textDecoration: item.packed ? "line-through" : "none" }}>
        {item.quantity} {item.description}
      </span>
      <button onClick={handleDelete}>❌</button>
    </li>
  );
}
