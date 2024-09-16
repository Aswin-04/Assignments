import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import {
  Dashboard,
  Signin,
  Signup,
  SendMoney
} from './components/'

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <Signup/>,
  },
  {
    path: "/signin",
    element: <Signin/>,
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
  },
  {
    path: "/send",
    element: <SendMoney/>,
  }
])


function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
