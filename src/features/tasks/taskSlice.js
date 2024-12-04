import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  filter: 'All' // New state for task filter
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload; // Set the filter criteria
    }
  }
});

export const { addTask, deleteTask, setFilter } = taskSlice.actions;
export default taskSlice.reducer;
