import './App.css'
import { Suspense } from 'react'
import { lazyWithPreload } from 'react-lazy-with-preload'

const Home = lazyWithPreload(() => import('./components/Home'))
const Register = lazyWithPreload(() => import('./components/Register'))
const ForgotPassword = lazyWithPreload(() =>
  import('./components/ForgotPassword')
)
const Settings = lazyWithPreload(() => import('./components/Settings'))
const PostWall = lazyWithPreload(() => import('./components/PostWall'))
const Profile = lazyWithPreload(() => import('./components/Profile'))
const Terms = lazyWithPreload(() => import('./GDPR/Terms'))
const Condition = lazyWithPreload(() => import('./GDPR/Condition'))
const Policy = lazyWithPreload(() => import('./GDPR/Policy'))

import {
  createHashRouter,
  Outlet,
  RouterProvider,
  Navigate
} from 'react-router-dom'
import PropTypes from 'prop-types'

function Root() {
  return <Outlet />
}

function PrivateRoute({ children }) {
  // Switch to true to access the wall
  const userLoggedIn = true

  if (!userLoggedIn) {
    return <Navigate to="/" />
  }

  return children
}

PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired
}

function App() {
  const router = createHashRouter([
    {
      children: [
        {
          element: (
            <Suspense fallback={<>Loading....</>}>
              <Home />
            </Suspense>
          ),
          path: '/'
        },
        {
          element: (
            <Suspense fallback={<>Loading....</>}>
              <Register />
            </Suspense>
          ),
          path: '/register'
        },
        {
          element: (
            <Suspense fallback={<>Loading....</>}>
              <ForgotPassword />
            </Suspense>
          ),
          path: '/forgotpassword'
        },
        {
          element: (
            <Suspense fallback={<>Loading....</>}>
              <Settings />
            </Suspense>
          ),
          path: '/settings/:id'
        },

        {
          children: [
            {
              element: (
                <Suspense fallback={<>Loading....</>}>
                  <PostWall />
                </Suspense>
              ),
              path: '/postwall'
            }
          ]
        },
        {
          element: (
            <Suspense fallback={<>Loading....</>}>
              <PostWall />
            </Suspense>
          ),
          path: '/postwall/:id'
        },
        {
          element: (
            <Suspense fallback={<>Loading....</>}>
              <Profile />
            </Suspense>
          ),
          path: '/profile/:id'
        },
        {
          element: (
            <Suspense fallback={<>Loading....</>}>
              <Terms />
            </Suspense>
          ),
          path: '/terms'
        },
        {
          element: (
            <Suspense fallback={<>Loading....</>}>
              <Condition />
            </Suspense>
          ),
          path: '/condition'
        },
        {
          element: (
            <Suspense fallback={<>Loading....</>}>
              <Policy />
            </Suspense>
          ),
          path: '/policy'
        }
      ],
      element: <Root />
    }
  ])

  return <RouterProvider router={router} />
}

export default App
