import "./App.css";
import Home from "./components/Home";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import PostWall from "./components/PostWall";
import Profile from "./components/Profile";
import Terms from "./GDPR/Terms";
import Condition from "./GDPR/Condition";
import Policy from "./GDPR/Policy";
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
        { element: <PostWall />, path: "/postwall" },
        { element: <Terms />, path: "/terms" },
        { element: <Condition />, path: "/condition" },
        { element: <Policy />, path: "/policy" },
        { element: <Profile />, path: "/profile" },
      ],
      element: <Root />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
