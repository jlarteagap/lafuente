import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

interface TodoFormProps {
  onAdd: (title: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title);
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="New Item"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        variant="outlined"
        size="small"
      />
      <Button type="submit" variant="contained" color="primary" style={{ marginLeft: '8px' }}>
        Add
      </Button>
    </form>
  );
};

export default TodoForm;