import style from './TodoListItem.module.css';
import { Text } from 'components';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';

export const TodoListItem = ({
  text,
  index,
  onDelete,
  onEdit,
  openEditForm,
}) => {
  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO #{index + 1}
      </Text>
      <Text>{text}</Text>
      <button
        className={style.editButton}
        type="button"
        onClick={() => {
          onEdit();
          openEditForm();
        }}
      >
        <RiEdit2Line size={24} />
      </button>
      <button className={style.deleteButton} type="button" onClick={onDelete}>
        <RiDeleteBinLine size={24} />
      </button>
    </div>
  );
};
