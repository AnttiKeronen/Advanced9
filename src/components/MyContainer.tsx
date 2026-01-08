import { useState } from "react";
import MyList from "./MyList";
import type { TItem } from "./MyList"; 
import { v4 as uuidv4 } from "uuid";



const MyContainer = () => {
  const [items, setItems] = useState<TItem[]>([]);
  const [text, setText] = useState("");

  const addItem = () => {
    if (!text.trim()) return;

    setItems([
      ...items,
      {
        id: uuidv4(), // <-- replaced crypto.randomUUID() with uuidv4()
        text: text,
        clicked: false,
      },
    ]);
    setText("");
  };

  const toggleItem = (id: string) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, clicked: !item.clicked } : item
      )
    );
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button onClick={addItem}>Add</button>

      <MyList
        header="My List"
        items={items}
        onItemClick={toggleItem}
      />
    </div>
  );
};

export default MyContainer;
