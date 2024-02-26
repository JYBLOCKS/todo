import { describe, test, expect } from "vitest";
import { renderHook } from "@testing-library/react";
import { useTaskState } from "../../hooks/useTaskState";

describe("test hook to manage state of tasks", () => {
  test("initial state", () => {
    const { result } = renderHook(() => useTaskState());
    expect(result.current.tasks).toStrictEqual([]);
  });

  test("save one value and get the list of tasks", () => {
    const mockOneTask = { id: 0, name: "Test", description: "Test number 1" };
    const { result } = renderHook(() => useTaskState());
    result.current.AddTask(mockOneTask);
  });

  test("save two value", () => {
    const mockTwoTask = { id: 1, name: "Test 2", description: "Test number 2" };
    const { result } = renderHook(() => useTaskState());
    result.current.AddTask(mockTwoTask);
  });

  test("update one value", () => {
    const mockUpdateTask = {
      id: 0,
      name: "Test",
      description: "Test number update 1",
    };
    const { result } = renderHook(() => useTaskState());
    result.current.UpdateTask(mockUpdateTask);
  });

  test("verify if task are updated", () => {
    const { result } = renderHook(() => useTaskState());
    const mockTwoTask = { id: 1, name: "Test 2", description: "Test number 2" };
    const mockUpdateTask = {
      id: 0,
      name: "Test",
      description: "Test number update 1",
    };
    expect(result.current.tasks).toStrictEqual([mockUpdateTask, mockTwoTask]);
  });

  test("delete one value and get the list of tasks left", () => {
    const { result } = renderHook(() => useTaskState());
    result.current.DeleteTask(0);
  });

  test("verify if task are deleted", () => {
    const { result } = renderHook(() => useTaskState());
    const mockTwoTask = { id: 1, name: "Test 2", description: "Test number 2" };
    expect(result.current.tasks).toStrictEqual([mockTwoTask]);
  });
});
