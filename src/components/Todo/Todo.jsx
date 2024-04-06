import { RiDeleteBinLine, RiEdit2Fill } from 'react-icons/ri';
import { Text } from 'components';
import { DeleteButton, TodoWrapper, EditButton } from './Todo.styled';
import { removeTodo, editTodo } from '../../redux/slice';
import { useDispatch } from 'react-redux';

export const Todo = ({ text, counter, id }) => {
  const dispatch = useDispatch();
  const handleDelete = evt => {
    dispatch(removeTodo(id));
  };

  const handleEdit = evt => {
    const text = prompt('Input your new text, please!');
    dispatch(editTodo({ id, text }));
  };

  return (
    <>
      <TodoWrapper>
        <Text textAlign="center" marginBottom="20px">
          TODO #{counter}
        </Text>
        <Text>{text}</Text>
        <DeleteButton type="button" onClick={handleDelete}>
          <RiDeleteBinLine size={24} />
        </DeleteButton>
        <EditButton onClick={handleEdit}>
          <RiEdit2Fill />
        </EditButton>
      </TodoWrapper>
    </>
  );
};
