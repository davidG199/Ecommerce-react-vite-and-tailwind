import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../context'
import OrderCard from '../../components/orderCard';
import Layout from '../../components/layout'

function MyOrder() {

  const context = useContext(ShoppingCartContext);
  // console.log(context.order);
    return (
      
      <Layout>
        <div className='flex items-center w-80 relative justify-center mb-6'>
        <Link to='/my-orders' className='absolute left-0'>
          <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer' />
        </Link>
        <h1>MyOrder</h1>
      </div>
        <div
        className='flex flex-col w-80' >
        {
        context.order && context.order.length > 0 ? 		 
  	context.order.slice(-1)[0].products.map(product => (
                    <OrderCard 
                    key={product.id}
                    id={product.id}
                    title ={product.title}
                    imageUrl = {product.images}
                    price= {product.price}
                    
                    />
                    
              ))
              : <p>No hay productos en la orden.</p>
            }
      </div>
        </Layout>  

      
    )
  }
  
  export default MyOrder