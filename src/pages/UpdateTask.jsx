import { useState } from "react";
import { useTaskState } from "../hooks/useTaskState";
import { Link, useNavigate, useParams } from "react-router-dom";

export const UpdateTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, UpdateTask, GetTask } = useTaskState();
  const { name: initialName, description: initialDescription } = tasks.filter((item) => item.id === parseInt(id))[0];
  const [name, setName] = useState(initialName);
  const [description, setDescription] = useState(initialDescription);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = tasks.length > 0 ? tasks[tasks.length - 1]?.id : 0;
    UpdateTask({ id, name, description });
    navigate("/");
  };

  return (
    <div className="d-flex w-100 justify-content-center align-items-center mt-5">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Update User</h3>
        <div className="row">
          <div>
            <h4>Name:</h4>
            <input
              type="text"
              name="name"
              className="from-control border border-info rounded col-12"
              placeholder="enter name"
              value={name}
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="d-flex justify-content-between mt-4">
            <button
              className="btn btn-success my-3 "
              onClick={(e) => handleSubmit(e)}
            >
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
