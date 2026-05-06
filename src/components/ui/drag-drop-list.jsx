
import React, { useState, useRef } from "react";

const DragDropList = () => {
  const initialItems = ["Item 1", "Item 2", "Item 3", "Item 4"];
  const [items, setItems] = useState(initialItems);
  const dragItem = useRef(null);

  const handleDragStart = (index) => {
    dragItem.current = index;
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const handleDrop = (dropIndex) => {
    if (dragItem.current !== null && dragItem.current !== dropIndex) {
      const copyItems = [...items];
      [copyItems[dragItem.current], copyItems[dropIndex]] = [
        copyItems[dropIndex],
        copyItems[dragItem.current],
      ];
      setItems(copyItems);
    }
    dragItem.current = null;
  };

  const getItemStyle = (index) => {
    return {
      padding: "10px",
      margin: "5px 0",
      backgroundColor: "#f0f0f0",
      border: "1px solid #ccc",
      cursor: "move",
      opacity: dragItem.current === index ? 0.5 : 1, // Dim the dragged item
    };
  };

  return (
    <div style={{ width: "200px", margin: "auto" }}>
      {items.map((item, index) => (
        <div
          key={index}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={(e) => handleDragOver(e, index)}
          onDrop={() => handleDrop(index)}
          style={getItemStyle(index)}
        >
          {item} <input type="checkbox" />
        </div>
      ))}
    </div>
  );
};

export default DragDropList;