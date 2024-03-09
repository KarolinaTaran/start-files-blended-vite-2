import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';

import style from './EditForm.module.css';
import { useState } from 'react';

export const EditForm = ({ curentTodo, onEdit, closeEditForm }) => {
  const [text, setText] = useState(curentTodo.text);

  const handleChange = ev => {
    setText(ev.target.value);
  };

  const handleSubmit = ev => {
    ev.preventDefault();
    onEdit({ ...curentTodo, text });
    closeEditForm();
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button
        className={style.editButton}
        onClick={closeEditForm}
        type="button"
      >
        <MdOutlineCancel color="red" size="16px" />
      </button>

      <input
        value={text}
        onChange={handleChange}
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        autoFocus
      />
    </form>
  );
};
