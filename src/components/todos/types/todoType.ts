// 1.  type 으로 하겠다.
export type TodoType = { id: string; title: string; completed: boolean };
// 2. interface 으로 하겠다.
export interface ITodoType {
  id: string;
  title: string;
  completed: boolean;
}
