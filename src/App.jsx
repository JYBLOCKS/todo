import { Home } from "./pages/Home";
import { AddTask } from "./pages/AddTask";
import { UpdateTask } from "./pages/UpdateTask";
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
