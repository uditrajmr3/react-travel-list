export default function Stats({ itemCount, packedCount }) {
  return (
    <footer className="stats">
      <em>
        🧳 You have {itemCount} items on your list, and you have already packed{" "}
        {packedCount} ({Math.round((packedCount / itemCount) * 100)}%)
      </em>
    </footer>
  );
}
