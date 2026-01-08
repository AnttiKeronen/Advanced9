import React from "react";

export type TItem = {
  id: string;
  text: string;
  clicked: boolean;
};

interface ListProps {
  header: string;
  items: TItem[];
  updateList: (items: TItem[]) => void;
}

const MyList: React.FC<ListProps> = ({ header, items, updateList }) => {
  const handleClick = (id: string) => {
    const newItems = items.map(item =>
      item.id === id ? { ...item, clicked: !item.clicked } : item
    );
    updateList(newItems);
  };

  return (
    <div>
      <h2>{header}</h2>
      <ul>
        {items.map(item => (
          <li
            key={item.id}
            role="listitem"
            style={{ textDecoration: item.clicked ? "line-through" : "" }}
            onClick={() => handleClick(item.id)}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyList;
