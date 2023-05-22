import "./Cell.css";

export function Cell({ children, isSelected, updateBoard, index }) {
  const className = `Cell ${isSelected ? "isSelected" : ""}`;

  const handleClick = () => {
    updateBoard(index);
  }

  return (
    <section onClick={handleClick} className={className}>
      {children}
    </section>
  );
}
