import './App.css'
import { Home } from './pages/Home.jsx';
import { AddTask } from './pages/AddTask.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/add",
    element: <AddTask />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
