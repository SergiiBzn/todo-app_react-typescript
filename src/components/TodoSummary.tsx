import type { Todo } from '../types/todo';

interface TodoSummaryProps {
  todos: Todo[];
  deleteAllCompleted: () => void;
}

export default function TodoSummary({
  todos,
  deleteAllCompleted,
}: TodoSummaryProps) {
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div className='p-4 text-center'>
      <h2>Todo Summary Component</h2>
      <p>{completedTodos.length} completed todos</p>
      {completedTodos.length > 0 && (
        <button
          onClick={deleteAllCompleted}
          className='mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600'
        >
          Delete All Completed
        </button>
      )}
    </div>
  );
}
