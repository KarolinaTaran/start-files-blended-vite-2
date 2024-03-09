import { Grid, GridItem, TodoListItem } from '..';

export const TodoList = ({ todos, onDelete, onEdit, openEditForm }) => {
  return (
    <Grid>
      {todos.map(({ id, text }, index) => (
        <GridItem key={id}>
          <TodoListItem
            text={text}
            index={index}
            onDelete={() => onDelete(id)}
            onEdit={() => onEdit({ id, text })}
            openEditForm={openEditForm}
          />
        </GridItem>
      ))}
    </Grid>
  );
};
