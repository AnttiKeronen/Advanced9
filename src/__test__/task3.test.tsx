import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import MyList, { TItem } from "../components/MyList"; 

test("List takes props", () => {
  const items: TItem[] = [
    { id: "5", text: "item number 1", clicked: false },
    { id: "420", text: "item number 2", clicked: true },
  ];

  const props = { 
    header: "Another header", 
    items: items, 
    onItemClick: jest.fn() 
  };

  const { getByText } = render(<MyList {...props} />);
  
  expect(getByText(/another header/i)).toBeInTheDocument();
  expect(getByText(/item number 1/i)).toBeInTheDocument();
  expect(getByText(/item number 2/i)).toBeInTheDocument();
});
