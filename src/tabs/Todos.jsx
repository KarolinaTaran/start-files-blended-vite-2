import { EditForm, Form, Text, TodoList } from 'components';
import { nanoid } from 'nanoid';
import { useState } from 'react';

export const Todos = () => {
  const [todos, setTodos] = useState([]);
  const handleDelete = id => {
    const result = todos.filter(todo => todo.id !== id);
    setTodos(result);
  };

  const [curentTodo, setCurentTodo] = useState(null);

  const [isEdit, setIsEdit] = useState(false);

  const openEditForm = () => {
    setIsEdit(true);
  };

  const closeEditForm = () => {
    setIsEdit(false);
  };

  const saveCurentTodo = ({ id, text }) => {
    setCurentTodo({ id, text });
  };

  const handleEdit = ({ id, text }) => {
    const result = todos.map(item => {
      return item.id === id ? { id, text } : item;
    });

    setTodos(result);
  };

  const handleSubmit = text => {
    const newTodo = {
      id: nanoid(),
      text,
    };
    setTodos(prev => [...prev, newTodo]);
  };
  return (
    <>
      {isEdit ? (
        <EditForm curentTodo={curentTodo} onEdit={handleEdit} closeEditForm={closeEditForm}/>
      ) : (
        <Form onSubmit={handleSubmit} />
      )}
      <Text textAlign="center">There are no any todos ...</Text>
      <TodoList
        todos={todos}
        onDelete={handleDelete}
        onEdit={saveCurentTodo}
        openEditForm={openEditForm}
      />
    </>
  );
};
