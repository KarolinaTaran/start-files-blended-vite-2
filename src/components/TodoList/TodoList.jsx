import { Grid, GridItem, TodoListItem } from '..';

export const TodoList = ({ todos }) => {
  return (
    <Grid>
      {todos.map(({ id, text }) => (
        <GridItem key={id}>
          <TodoListItem />
        </GridItem>
      ))}
    </Grid>
  );
};
