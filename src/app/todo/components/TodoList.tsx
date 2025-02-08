'use client'
import React, { useState } from 'react';
import { useAnalytics } from './AnalyticsContext';
import TodoForm from './TodoForm';
import { Card, Typography } from '@mui/material';

interface TodoItem {
  id: number;
  title: string;
}

const ComponentA: React.FC = () => {
  const { logHover } = useAnalytics();
  const [items, setItems] = useState<TodoItem[]>([
    { id: 1, title: 'Learn React' },
    { id: 2, title: 'Build a project' },
    { id: 3, title: 'Deploy to production' },
  ]);

  const handleAdd = (title: string) => {
    const newItem = { id: items.length + 1, title };
    setItems([...items, newItem]);
  };

  return (
    <div>
      <TodoForm onAdd={handleAdd} />
      <Card style={{ padding: '1rem', marginTop: '1rem' }}>
        {items.map((item) => (
          <Typography key={item.id} onMouseEnter={logHover}>
            {item.title}
          </Typography>
        ))}
      </Card>
    </div>
  );
};

export default ComponentA;