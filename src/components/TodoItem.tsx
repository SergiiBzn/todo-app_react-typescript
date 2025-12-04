import type { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <div key={todo.id} className='text-lg flex items-center gap-2'>
      <label className='flex items-center gap-2 border p-4 rounded-md border-gray-300 bg-white-hover grow'>
        <input
          type='checkbox'
          checked={todo.completed}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onToggle(todo.id, e.target.checked)
          }
          className='mr-2'
        />
        <span className={todo.completed ? 'line-through' : ''}>
          {todo.title}
        </span>
      </label>
      <button onClick={() => onDelete(todo.id)} className='text-red-500 mt-1'>
        Delete
      </button>
    </div>
  );
}
