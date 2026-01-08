import React from "react";

export type TItem = {
  id: string;
  text: string;
  clicked: boolean;
};

type ListProps = {
  header: string;
  items: TItem[];
  onItemClick: (id: string) => void;
};

const MyList = ({ header, items, onItemClick }: ListProps) => {
  return (
    <div>
      <h2>{header}</h2>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            role="listitem"
            onClick={() => onItemClick(item.id)}
            style={{
              cursor: "pointer",
              textDecoration: item.clicked ? "line-through" : "",
            }}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyList;
