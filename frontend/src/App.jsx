import "./App.css";
import Home from "./components/Home";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import { createHashRouter, Outlet, RouterProvider } from "react-router-dom";

function Root() {
  return <Outlet />;
}

function App() {
  const router = createHashRouter([
    {
      children: [
        { element: <Home />, path: "/" },
        { element: <Register />, path: "/register" },
        { element: <ForgotPassword />, path: "/forgotpassword" },
      ],
      element: <Root />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
