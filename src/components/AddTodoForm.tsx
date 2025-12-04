import { useState } from 'react';

interface AddTodoFormProps {
  onSubmit: (title: string) => void;
}

export default function AddTodoForm({ onSubmit }: AddTodoFormProps) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (input.trim() === '') return;

    onSubmit(input);
    setInput('');
  };

  return (
    <form
      className='max-w-lg mx-auto bg-slate-100 rounded-md mb-3'
      onSubmit={handleSubmit}
    >
      <div className='flex gap-2'>
        <input
          type='text'
          value={input}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
          placeholder='New todo title'
          className='grow border border-gray-300 rounded-md p-2'
        />
        <button
          type='submit'
          className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'
        >
          Add
        </button>
      </div>
    </form>
  );
}
