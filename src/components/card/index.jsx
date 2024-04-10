import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../context';

const Card = (data) => {
  const context = useContext(ShoppingCartContext);

  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setProductToShow(productDetail);
    context.closeCheckoutSideMenu()
  };

  const addProductsToCart = (event, productData) => {
    event.stopPropagation()
    context.setCount(context.count + 1);
    context.setCartProducts([...context.cartProducts, productData]);
    context.closeProductDetail()
    context.openCheckoutSideMenu();
    
  };

  const renderIcon = (id) => {
    const isInCart = context.cartProducts.filter(product => product.id === id).length > 0

    if (isInCart) {
      return(
        <button
            className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 hover:scale-110'
          >
            <CheckIcon className='h-3 w-3 text-green-400 stroke-current'></CheckIcon>
          </button>
      )
    }else{
      return(
      <button
            className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 hover:scale-110'
            onClick={(event) => addProductsToCart(event, data.data)}
          >
            <PlusIcon className='h-3 w-3 '></PlusIcon>
          </button>
      )
    }

    
  }
  return (
    <div
      className=' bg-gray-50 cursor-pointer w-72 h-80 md:w-60 md:h-70 rounded-lg shadow-lg '
      onClick={() => showProduct(data.data)}
    >
      <figure className='relative w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5 font-semibold'>
          {data.data.category.name}
        </span>
        <img
          className='w-full h-full object-cover rounded-t-lg'
          src={data.data.images[0]}
          alt={data.data.title}
        />
        {renderIcon(data.data.id)}        
      </figure>
      <span className='flex justify-between px-4 md:px-3 items-center h-1/5'>
        <span className='text-sm font-light'>{data.data.title}</span>
        <span className='text-lg font-medium ms-3 md:ms-2'>${data.data.price}</span>
      </span>
    </div>
  );
};

export default Card;
