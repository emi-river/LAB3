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

Home.preload()
Register.preload()
ForgotPassword.preload()
Settings.preload()
PostWall.preload()
Profile.preload()
Terms.preload()
Condition.preload()
Policy.preload()

import { createHashRouter, Outlet, RouterProvider } from 'react-router-dom'

function Root() {
  return <Outlet />
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
