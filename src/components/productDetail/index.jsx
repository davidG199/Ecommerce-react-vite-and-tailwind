import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../context';

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);
  const { images, title, price, description } = { ...context.productToShow }

  return ( 
    <aside
      className={`${
        context.isProductDetailOpen ? 'flex' : 'hidden'
      } w-[360px] h-[calc(100vh-80px)] flex-col fixed right-0 border border-black bg-white rounded-lg`}
    >
      <div className='flex justify-between items-center p-6'>
        <h2 className=' font-medium text-xl'>Details</h2>
        <div>
          <XMarkIcon
            onClick={() => context.closeProductDetail()}
            className='h-6 w-6 cursor-pointer'
          />
        </div>
      </div>
      <figure className='px-6'>
        <img className='w-full h-full rounded-lg'
        src={images}
        alt={title} />
      </figure>
      <p className='flex flex-col p-6'>
        <span className='font-medium text-2xl mb-1'>{`$ ${price}`}</span>
        <span className='font-medium text-md'>${title}</span>
        <span className='font-light text-sm'>${description}</span>
      </p>
    </aside>
  );
};

export default ProductDetail;
