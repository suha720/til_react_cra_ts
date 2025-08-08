type TodoEmotionpRops = {
  onToggle: () => void;
  onDelte: () => void;
  onEdit: () => void;
};
const TodoItem = ({ onToggle, onDelte, onEdit }: TodoEmotionpRops) => {
  return <div>TodoItem</div>;
};

export default TodoItem;
