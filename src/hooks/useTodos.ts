import { useEffect, useState } from 'react';
import { dummyData } from '../data/todos';
import type { Todo } from '../types/todo';

export function useTodos() {
  const [todos, setTodos] = useState(() => {
    const storedTodos: Todo[] = JSON.parse(
      localStorage.getItem('todos') || 'null'
    );
    return storedTodos ? storedTodos : dummyData;
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleToggle = (id: number, completed: boolean) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
  };

  const addTodo = (title: string) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const handleDelete = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const deleteAllCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  };

  return {
    todos,
    handleToggle,
    addTodo,
    handleDelete,
    deleteAllCompleted,
  };
}
