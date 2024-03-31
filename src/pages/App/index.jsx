import { useRoutes,BrowserRouter } from 'react-router-dom' 
import { ShoppingCartProvider } from '../../context'
import MyOrder from '../myOrder'
import MyOrders from '../myOrders'
import NotFound from '../notFound'
import SignIn from '../signIn'
import MyAccount from '../myAccount'
import Home from '../home'
import Navbar from '../../components/navbar'
import CheckoutSideMenu from '../../components/checkoutSideMenu'
import '../../assets/App.css'

const AppRoutes = () => {
  let routes = useRoutes ([
    {path: '/', element: <Home/>},
    {path: '/clothes', element: <Home/>},
    {path: '/electronics', element: <Home/>},
    {path: '/furnitures', element: <Home/>},
    {path: '/toys', element: <Home/>},
    {path: '/others', element: <Home/>},
    {path: '/my-order', element: <MyOrder/>},
    {path: '/my-orders', element: <MyOrders/>},
    {path: '/my-orders/last', element: <MyOrder/>},
    {path: '/my-orders/:id', element: <MyOrder/>},
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
      <CheckoutSideMenu/>
    </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
