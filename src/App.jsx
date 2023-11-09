import { useState } from "react";
import Header from "./components/electronic/Header";
import Form from "./components/electronic/Form";
import ElectronicList from "./components/electronic/ElectronicList";
import Footer from "./components/electronic/Footer";

const electronicItems = [
  {
    id: 1,
    name: 'Laptop',
    quantity: 1,
    checked: true,
  },
  {
    id: 2,
    name: 'Handphone',
    quantity: 2,
    checked: false,
  },
];

export default function App() {
  const [items, setItems] = useState(electronicItems);

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }

  function handleClearItems() {
    setItems([]);
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItem={handleAddItem} />
      <ElectronicList 
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItems={handleClearItems}
      />
      <Footer items={items} />
    </div>
  );
}