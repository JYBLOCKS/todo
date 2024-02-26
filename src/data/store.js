import { configureStore } from '@reduxjs/toolkit'
import taskReducer from './taskReducer/taskReducer';

export default configureStore({
  reducer: {
    task: taskReducer
  },
})