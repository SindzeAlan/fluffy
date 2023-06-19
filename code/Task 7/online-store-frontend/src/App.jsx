import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom'
import './index.css'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Product from './pages/Product'
import Dashboard from './pages/Dashboard'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Home/>} />
      <Route path='sign-up' element={<SignUp/>}/>
      <Route path='sign-in' element={<Login/>} />
      <Route path='product' element={<Product/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
    </Route>

  )
)

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
