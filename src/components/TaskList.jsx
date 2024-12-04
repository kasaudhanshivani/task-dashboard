import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, setFilter } from '../features/tasks/taskSlice';

import { Button, Box, Card, CardContent, Typography, Select, MenuItem } from '@mui/material';

const TaskList = () => {
  const { tasks, filter } = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter(task => {
    if (filter === 'All') return true;
    // Add custom filter logic if tasks have additional attributes like status or priority
    return task.status === filter; // Example filter based on task status
  });

  return (
    <Card sx={{ backgroundColor: '#1E1E2F', color: 'white' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Task List
        </Typography>

        {/* Filter Dropdown */}
        <Select
          value={filter}
          onChange={(e) => dispatch(setFilter(e.target.value))}
          sx={{ mb: 2, backgroundColor: 'white', color: 'black' }}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="Completed">Completed</MenuItem>
        </Select>

        {filteredTasks.length === 0 ? (
          <Typography>No tasks available</Typography>
        ) : (
          filteredTasks.map(task => (
            <Box
              key={task.id}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#2A2A3F',
                color: 'white',
                padding: 1,
                borderRadius: 1,
                mb: 1,
              }}
            >
              <Typography>{task.title}</Typography>
              <Button
                variant="contained"
                color="error"
                onClick={() => dispatch(deleteTask(task.id))}
              >
                Delete
              </Button>
            </Box>
          ))
        )}
      </CardContent>
    </Card>
  );
};

export default TaskList;
