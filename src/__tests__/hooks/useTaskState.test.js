import { describe, test, expect} from 'vitest'
import { renderHook } from '@testing-library/react'
import { useTaskState } from '../../hooks/useTaskState'

describe("test hook to manage state of tasks", () => {

    test("initial state", () => {
        const { result } = renderHook(() => useTaskState()) 
        expect(result.current.state).toStrictEqual([])
    })

    test("save one value and get the list of tasks", () => {
        const mockOneTask = { id: 0, name: "Test", description: "Test number 1" }
        const { result } = renderHook(() => useTaskState()) 
        result.current.addTask(mockOneTask)
        expect(result.current.state).toStrictEqual([mockOneTask])
    })

    test("get one task", () => {
        const { result } = renderHook(() => useTaskState())
        result.current.getTask(0)
        const mockOneTask = { id: 0, name: "Test", description: "Test number 1" }
        expect(result.current.state).toStrictEqual([mockOneTask])
    })

    test("save two value and update then get the list of tasks", () => {
        const mockOneTask = { id: 0, name: "Test", description: "Test number 1" }
        const mockTwoTask = { id: 1, name: "Test 2", description: "Test number 2" }
        const mockUpdateTask = { id: 0, name: "Test", description: "Test number update 1" }
        const { result } = renderHook(() => useTaskState())
        result.current.addTask(mockTwoTask)
        expect(result.current.state).toStrictEqual([mockOneTask, mockTwoTask])
        result.current.updateTask(mockUpdateTask)
        expect(result.current.state).toStrictEqual([mockUpdateTask, mockTwoTask])
    })

    test("delete one value and get the list of tasks left", () => {
        const { result } = renderHook(() => useTaskState())
        result.current.deleteTask(0)
        const mockTwoTask = { id: 1, name: "Test 2", description: "Test number 2" }
        expect(result.current.state).toStrictEqual([mockTwoTask])
    })

})