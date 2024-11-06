import { StrictMode } from 'react' 
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom' //npm install react-router-dom
import LoginPage from './components/Page/Login.jsx'
import RegisterPage from './components/Page/Register.jsx'
import Driver from './components/Page/Driver.jsx'
import Users from './components/Page/Users.jsx'
import Template from './components/Layout/Template.jsx'
import Admin from './components/Page/Admin.jsx'
import Kendaraan from './components/Fragments/Kendaraan.jsx'
import Pesanan from './components/Fragments/Pesanan.jsx'
import Riwayat from './components/Fragments/Riwayat.jsx'

const router=createBrowserRouter([
  {
    path:'/login',
    element:<LoginPage />
  },
  {
    path:'/register',
    element:<RegisterPage />
  },
  {
    path:'/driver',
    element:<Template linkDashboard="/driver">
      <Driver />
    </Template>
  },
  {
    path:'/kendaraan',
    element: <Template linkDashboard="/driver">
      <Kendaraan />
    </Template>
  },
  {
    path:'/pesanan',
    element: <Template linkDashboard="/driver">
      <Pesanan />
    </Template>
  },
  {
    path:'/riwayat',
    element: <Template linkDashboard="/driver">
      <Riwayat />
    </Template>
  },
  {
    path:'/user',
    element:<Template linkDashboard="/user">
      <Users />
    </Template>
  },
  {
    path:'/admin',
    element:<Template linkDashboard="/admin">
      <Admin />
    </Template>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)