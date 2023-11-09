import Item from './Item';

export default function ElectronicList({ items, onDeleteItem, onToggleItem, onClearItems }) {
  return (
    <>
      <div className="list">
        <ul>
          {items.map((item) => (
            <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />
          ))}
        </ul>
      </div>
      <div className="actions">
        <button onClick={onClearItems}>Bersihkan Daftar</button>
      </div>
    </>
  );
}