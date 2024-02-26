import { Home } from "./pages/Home.jsx";
import { AddTask } from "./pages/AddTask.jsx";
import { UpdateTask } from "./pages/UpdateTask.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/add",
    element: <AddTask />,
  },
  {
    path: "/update/:id",
    element: <UpdateTask />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
