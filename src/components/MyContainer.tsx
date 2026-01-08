// src/components/MyContainer.tsx
import React, { useState } from "react";
import MyList, { TItem } from "./MyList";

const MyContainer = () => {
  // Using simple numeric ids as strings
  const [items, setItems] = useState<TItem[]>([
    { id: "1", text: "First item", clicked: false },
    { id: "2", text: "Second item", clicked: false },
  ]);
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (!text) return;
    const newId = (items.length + 1).toString();
    setItems([...items, { id: newId, text, clicked: false }]);
    setText("");
  };

  const handleItemClick = (id: string) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, clicked: !item.clicked } : item
      )
    );
  };

  return (
    <div>
      <MyList header="My List" items={items} onItemClick={handleItemClick} />
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default MyContainer;
