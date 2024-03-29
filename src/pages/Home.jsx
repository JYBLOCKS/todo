import { Link } from "react-router-dom";
import { useTaskState } from "../hooks/useTaskState";
import { UlComponent } from "../components/Links/UlComponent.jsx";
import { LiComponent } from "../components/Links/LiComponent.jsx";

export const Home = () => {
  const { tasks, DeleteTask } = useTaskState();

  return (
    <>
      <UlComponent>
        <LiComponent>home</LiComponent>
        <LiComponent>add</LiComponent>
        <LiComponent>update</LiComponent>
      </UlComponent>
      <div className="container">
        <div className="d-flex justify-content-between">
          <h2 className="col-4 mt-4">Crud App</h2>
          <Link to={"add"} className="btn btn-success my-3 col-3 mt-4">
            Create +
          </Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index}>
                <td>{task.id}</td>
                <td>{task.name}</td>
                <td>{task.description}</td>
                <td>
                  <Link
                    to={`update/${task.id}`}
                    className="btn btn-sm btn-primary"
                  >
                    ✏️
                  </Link>
                  <button
                    onClick={() => DeleteTask(task.id)}
                    className="btn btn-sm btn-danger"
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
