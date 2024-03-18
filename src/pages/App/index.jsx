import { useRoutes,BrowserRouter } from 'react-router-dom' 
import { ShoppingCartProvider } from '../../context'
import MyOrder from '../myOrder'
import MyOrders from '../myOrders'
import NotFound from '../notFound'
import SignIn from '../signIn'
import MyAccount from '../myAccount'
import Home from '../home'
import Navbar from '../../components/navbar'
import '../../assets/App.css'

const AppRoutes = () => {
  let routes = useRoutes ([
    {path: '/', element: <Home/>},
    {path: '/my-order', element: <MyOrder/>},
    {path: '/my-orders', element: <MyOrders/>},
    {path: '/signIn', element: <SignIn/>},
    {path: '/my-account', element: <MyAccount/>},
    {path: '*', element: <NotFound/>}
])

  return routes
}


const App = () => {
  return (
    <ShoppingCartProvider>
    <BrowserRouter>
      <AppRoutes/>
      <Navbar/>
    </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App