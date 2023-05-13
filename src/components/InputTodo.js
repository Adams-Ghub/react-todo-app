import { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import '../styles/App.css';
import propTypes from 'prop-types';

const InputTodo = ({ addTodoItem }) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setTitle('');
      setMessage('');
    } else {
      setMessage('Please add an item.');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="Add Todo..."
          value={title}
          className="input-text"
          onChange={handleChange}
        />
        <button type="button" className="input-submit">
          <FaPlusCircle style={{
            color: '#5e5e5e',
            fontSize: '20px',
            marginTop: '2px',
          }}
          />
        </button>
      </form>
      <span className="submit-warning">{message}</span>
    </>
  );
};

InputTodo.propTypes = {
  addTodoItem: propTypes.func.isRequired,
};

export default InputTodo;
