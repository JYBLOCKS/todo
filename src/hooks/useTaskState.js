import { useState } from "react"
const initialState = []
export const useTaskState = () => {
    const [state, setState] = useState(initialState)
    const addTask = (task) => {
        setState([...state, task])
    }
    const deleteTask = (id) => {
        setState(state.filter(item => item.id !== id))
    }
    const updateTask = (task) => {
        setState([...state.filter(item => item.id !== id), task])
    }

    const getTask = (id) => {
        return state.filter(item => item.id === id)
    }

    return {state, getTask, addTask, updateTask, deleteTask}
}