import { Route,BrowserRouter, Routes } from 'react-router-dom' 
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

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home title={null}/>} />
    <Route path="/clothes" element={<Home title="Clothes"/>} />
    <Route path="/electronics" element={<Home title="Electronics" />} />
    <Route path="/furnitures" element={<Home title="Furniture" />} />
    <Route path="/shoes" element={<Home title="Shoes" />} />
    <Route path="/others" element={<Home title="Others" />} />
    <Route path="/my-account" element={<MyAccount />} />
    <Route path="/my-order" element={<MyOrder />} />
    <Route path="/my-orders/last" element={<MyOrder />} />
    <Route path="/my-orders/:id" element={<MyOrder />} />
    <Route path="/my-orders" element={<MyOrders />} />
    <Route path="/sign-in" element={<SignIn />} />
    <Route path="/*" element={<NotFound />} />
  </Routes>
);


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
