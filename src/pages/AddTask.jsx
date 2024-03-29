import { useState } from "react";
import { useTaskState } from "../hooks/useTaskState";
import { Link, useNavigate } from "react-router-dom";

export const AddTask = () => {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const navigate = useNavigate();
  const { tasks, AddTask } = useTaskState();

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const id = tasks.length > 0 ? tasks[tasks.length - 1]?.id + 1 : 0
    AddTask({ id, name, description });
    navigate("/");
  };

  return (
    <div className="d-flex w-100 justify-content-center align-items-center mt-5">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Add New User</h3>
        <div className="row">
          <div>
            <h4>Name:</h4>
            <input
              type="text"
              name="name"
              className="from-control border border-info rounded col-12"
              placeholder="enter name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <h4>Description:</h4>
            <input
              type="text"
              name="description"
              className="from-control border border-info rounded col-12"
              placeholder="enter description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="d-flex justify-content-between mt-4">
            <button className="btn btn-success my-3 " onClick={e => handleSubmit(e)}>
              Add
            </button>
            <Link to={"/"} className="btn btn-danger my-3">
              Cancel
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
