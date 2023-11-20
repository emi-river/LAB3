import "./App.css";
import Home from "./components/Home";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import PostWall from "./components/PostWall";

import {
  createHashRouter,
  Outlet,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import PropTypes from "prop-types";

import Profile from "./components/Profile";
import Terms from "./GDPR/Terms";
import Condition from "./GDPR/Condition";
import Policy from "./GDPR/Policy";

function Root() {
  return <Outlet />;
}

function PrivateRoute({ children }) {
  // Switch to true to access the wall
  const userLoggedIn = true;

  if (!userLoggedIn) {
    return <Navigate to="/" />;
  }

  return children;
}

PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired,
};

function App() {
  const router = createHashRouter([
    {
      children: [
        { element: <Home />, path: "/" },
        { element: <Register />, path: "/register" },
        { element: <ForgotPassword />, path: "/forgotpassword" },

        {
          children: [
            {
              element: (
                <PrivateRoute>
                  <PostWall />
                </PrivateRoute>
              ),
              path: "/postwall",
            },
          ],
        },

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
