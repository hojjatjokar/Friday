import React from 'react';
import Empty from './empty';
import './list.css';

interface IListProps {
  items: string[];
  onSelect: (item: string) => void;
  selectedItem?: string;
}

const List = ({ items, onSelect, selectedItem }: IListProps) => {
  const [filter, setFilter] = React.useState('');
  const filteredMakes = items.filter((item: string) => item.startsWith(filter));

  if (!items || items.length === 0) return <Empty />;

  return (
    <>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter ..."
      />
      <div className="items-wrapper">
        <div className="items">
          {filteredMakes.map((item: string) => (
            <button
              onClick={() => onSelect(item)}
              key={item}
              className={item === selectedItem ? 'item item-selected' : 'item'}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default List;
