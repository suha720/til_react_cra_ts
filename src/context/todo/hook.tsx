import { useContext } from 'react';
import { TodoActionContext, TodoStateContext } from './TodoProvider';

export function useTodosState() {
  const state = useContext(TodoStateContext);
  if (!state) {
    throw new Error('state이 없습니다.');
  }
  return state;
}

export function useTodoActions() {
  const action = useContext(TodoActionContext);
  if (!action) {
    throw new Error('액션이 없습니다.');
  }
  return action;
}
