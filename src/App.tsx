import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import TodoSummary from './components/TodoSummary';
import { useTodos } from './hooks/useTodos';

function App() {
  const { todos, handleToggle, addTodo, handleDelete, deleteAllCompleted } =
    useTodos();

  return (
    <main className='p-10 space-y-6 bg-gray-100 min-h-screen overflow-y-auto'>
      <h1 className='font-bold text-2xl text-center'>Your Todos</h1>
      <div className='max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-2'>
        <AddTodoForm onSubmit={addTodo} />
        <TodoList
          todos={todos}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      </div>
      <TodoSummary todos={todos} deleteAllCompleted={deleteAllCompleted} />
    </main>
  );
}

export default App;
