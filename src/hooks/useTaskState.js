import {
  addTask,
  deleteTask,
  updateTask,
} from "../data/taskReducer/taskReducer";
import store from "../data/store";
import { useState } from "react";

export const useTaskState = () => {
  const { dispatch, getState } = store;
  const [tasks, setTaskList] = useState(getState().task);

  const AddTask = (task) => {
    dispatch(addTask(task));
    setTaskList(getState().task);
  };

  const DeleteTask = (id) => {
    dispatch(deleteTask(id));
    setTaskList(getState().task);
  };

  const UpdateTask = (task) => {
    dispatch(updateTask(task));
    setTaskList(getState().task);
  };

  return { tasks, AddTask, UpdateTask, DeleteTask };
};
