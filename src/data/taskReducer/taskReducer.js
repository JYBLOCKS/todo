import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    updateTask: (state, action) => {
      const { id, name, description } = action.payload;
      const task = state.find((item) => item.id === id);
      if (task) {
        task.name = name;
        task.description = description;
      }
    },
    deleteTask: (state, action) => {
      const id = action.payload;
      const task = state.find((item) => item.id === id);
      if (task) {
        state.splice(state.indexOf(task), 1)
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTask, updateTask, deleteTask } = taskSlice.actions;

export const tasks = (state) => state.tasks;

export default taskSlice.reducer;
