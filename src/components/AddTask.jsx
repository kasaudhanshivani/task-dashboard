import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasks/taskSlice';
import { Button, TextField, Select, MenuItem, Card, CardContent, Typography, Box } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

const AddTask = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskStatus, setTaskStatus] = useState('Pending');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskTitle.trim() !== '') {
      dispatch(addTask({ id: uuidv4(), title: taskTitle, status: taskStatus }));
      setTaskTitle('');
    }
  };

  return (
    <Card sx={{ backgroundColor: '#1E1E2F', color: 'white' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Add New Task
        </Typography>
        <Box sx={{ display: 'flex', mb: 2 }}>
          <TextField
            variant="outlined"
            label="Task Title"
            value={taskTitle}
            onChange={e => setTaskTitle(e.target.value)}
            fullWidth
            sx={{ backgroundColor: 'white', borderRadius: 1 }}
          />
        </Box>
        <Select
          value={taskStatus}
          onChange={e => setTaskStatus(e.target.value)}
          sx={{ backgroundColor: 'white', color: 'black', mb: 2 }}
        >
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="Completed">Completed</MenuItem>
        </Select>
        <Button variant="contained" color="primary" onClick={handleAddTask}>
          Add Task
        </Button>
      </CardContent>
    </Card>
  );
};

export default AddTask;
