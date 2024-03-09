import { Grid, GridItem, TodoListItem } from '..';

export const TodoList = ({ todos }) => {
  return (
    <Grid>
      {todos.map(({ id, text }, index) => (
        <GridItem key={id}>
          <TodoListItem text={text} index={index} />
        </GridItem>
      ))}
    </Grid>
  );
};
