import './App.css'
import Home from './pages/Home'
import Properties from './pages/Properties'
import Contact from './pages/Contact'
import About from './pages/About'
import Account from './pages/Account'
import Dashboard from './pages/Dashboard'
import Layout from './components/Layout'
import ErrorPage from './pages/ErrorPage'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/properties",
        element: <Properties />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ]
  },

]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
