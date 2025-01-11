import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div className="container mt-5">
      <header className="d-flex align-items-center mb-4">
        <img
          src="HackerRank_Icon.png"
          alt="HackerRank Logo"
          style={{ width: '50px', height: '50px', marginRight: '10px' }}
        />
        <h1 className="text-success">Item List Manager</h1>
      </header>
      <h2>Item List</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter item"
        />
        <div className="input-group-append">
          <button className="btn btn-success" onClick={handleAddItem}>
            Add Item
          </button>
        </div>
      </div>
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;