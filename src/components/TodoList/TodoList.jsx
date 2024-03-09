import { Grid, GridItem, TodoListItem } from '..';

export const TodoList = ({ todos, onDelete }) => {
  return (
    <Grid>
      {todos.map(({ id, text }, index) => (
        <GridItem key={id}>
          <TodoListItem
            text={text}
            index={index}
            onDelete={() => onDelete(id)}
          />
        </GridItem>
      ))}
    </Grid>
  );
};
