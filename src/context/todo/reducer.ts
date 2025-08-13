import { TodoType } from '@/components/todos/types/todoType';
import { todoAction, TodoState } from './types';

export function todosReducer(state: TodoState, action: todoAction): TodoState {
  switch (action.type) {
    case 'ADD': {
      // {type:'ADD', payload: {id:"날짜", title:"안녕", complted:false}}
      const todo = action.payload;
      return { ...state, todos: [todo, ...state.todos] };
    }
    case 'TOGGLE': {
      //  { id: string }
      //   const id = action.payload.id;
      const { id } = action.payload;
      const arr: TodoType[] = state.todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      );
      return { ...state, todos: arr };
    }
    case 'DELETE': {
      //  { id: string }
      //   const id = action.payload.id;
      const { id } = action.payload;
      const arr: TodoType[] = state.todos.filter(todo => todo.id !== id);
      return { ...state, todos: arr };
    }
    case 'EDIT': {
      // { id: string; title: string }
      const { id, title } = action.payload;
      const arr: TodoType[] = state.todos.map(todo => (todo.id === id ? { ...todo, title } : todo));
      return { ...state, todos: arr };
    }
    default:
      return state;
  }
}
