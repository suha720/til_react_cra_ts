import { TodoType } from './types/todoType';
import TodoItem from './TodoItem';

type TodoListProps = {
  todos: TodoType[];
  onToggle: () => void;
  onDelte: () => void;
  onEdit: () => void;
};

const TodoList = ({ todos, onToggle, onDelte, onEdit }: TodoListProps): JSX.Element => {
  return (
    <div>
      <h2>할일목록</h2>
      <TodoItem onToggle={onToggle} onDelte={onDelte} onEdit={onEdit} />
    </div>
  );
};

export default TodoList;
