export default function Stats({ itemCount, packedCount }) {
  function getPercentage() {
    return Math.round((packedCount / itemCount) * 100);
  }

  function isReadyToTravel() {
    return getPercentage() === 100;
  }

  if (itemCount === 0) {
    return (
      <footer className="stats">
        <em>Start by Adding Items to the List 🫡</em>
      </footer>
    );
  }

  return (
    <footer className="stats">
      <em>
        {!isReadyToTravel()
          ? `🧳 You have ${itemCount} items on your list, and you have already packed${" "}
        ${packedCount} (${getPercentage()}%)`
          : "🧳 You got everything. Let's go ✈️"}
      </em>
    </footer>
  );
}
