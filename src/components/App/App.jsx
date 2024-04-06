import {
  Container,
  Grid,
  GridItem,
  Header,
  SearchForm,
  Section,
  Text,
  Todo,
} from 'components';
import { useSelector } from 'react-redux';
import { selectTodos } from '../../redux/slice';
import { selectText } from '../../redux/filterSlice';
import Filter from 'components/Filter/Filter';
export const App = () => {
  const todos = useSelector(selectTodos);
  const filter = useSelector(selectText);
  const getFilteredTodo = () =>
    todos.filter(todo =>
      todo.text.toLowerCase().includes(filter.toLowerCase())
    );
  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />

          {todos.length === 0 && (
            <Text textAlign="center">There are no any todos ... </Text>
          )}
          <Filter />
          <Grid>
            {todos.length > 0 &&
              getFilteredTodo().map((todo, index) => (
                <GridItem key={todo.id}>
                  <Todo
                    id={todo.id}
                    text={todo.text}
                    counter={index + 1}
                    // onClick={this.deleteTodo}
                  />
                </GridItem>
              ))}
          </Grid>
        </Container>
      </Section>
    </>
  );
};
