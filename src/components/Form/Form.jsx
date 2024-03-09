import { FiSearch } from 'react-icons/fi';

import { useState } from 'react';
import style from './Form.module.css';
export const Form = ({ onSubmit }) => {
  const [text, setText] = useState('');
  const handleChange = e => setText(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    if (!text.trim()) {
      return alert('Input please your task!');
    }
    onSubmit(text.trim());
    setText('');
  };
  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        value={text}
        onChange={handleChange}
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};
