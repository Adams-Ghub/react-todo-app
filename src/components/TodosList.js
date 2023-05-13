import propTypes from 'prop-types';
import TodoItem from './TodoItem';
import styles from '../styles/TodosList.module.css';

const TodosList = ({
  todosProps, handleChange, delTodo, setUpdate,
}) => (
  <ul className={styles.todoList}>
    {todosProps.map((todo) => (
      <TodoItem
        key={todo.id}
        itemProp={todo}
        handleChange={handleChange}
        delTodo={delTodo}
        setUpdate={setUpdate}
      />
    ))}
  </ul>
);

TodosList.propTypes = {
  todosProps: propTypes.array.isRequired,
  handleChange: propTypes.func.isRequired,
  delTodo: propTypes.func.isRequired,
  setUpdate: propTypes.func.isRequired,
};

export default TodosList;
