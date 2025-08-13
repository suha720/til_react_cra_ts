import { useTodosState } from '../../context/todo/hook';
import TodoItem from './TodoItem';

const TodoList = (): JSX.Element => {
  const { todos } = useTodosState();
  return (
    <div>
      <h2>할일목록</h2>
      {todos.length === 0 ? (
        <p>목록이 없습니다.</p>
      ) : (
        <ul>
          {todos.map(item => (
            <TodoItem key={item.id} todo={item}></TodoItem>
          ))}
        </ul>
      )}
      {/* 할일 즉 todos 는 여러개의 item 으로 구성된 배열이다. map 으로 출력 */}{' '}
      {/* TodoItem onToggle={onToggle} onDelte={onDelte} onEdit={onEdit} /> */}
    </div>
  );
};

export default TodoList;
