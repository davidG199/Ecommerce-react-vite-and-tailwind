import {CalendarDaysIcon } from '@heroicons/react/24/solid'
import {ShoppingCartIcon} from '@heroicons/react/24/outline'
import { ChevronRightIcon } from '@heroicons/react/24/solid';

export const OrdersCard = (props) => {
  const { totalPrice, totalProducts } = props;
  const currentDate = () => {
    const date = new Date().toLocaleDateString()
    return date
  }

  return (
    <div className=' w-80  flex  items-center mb-4 border shadow-xl p-3 rounded-lg bg-slate-100 '>
        <div className='flex items-center w-full justify-between'>
          <div>

            <span className='mr-5 flex items-center justify-center'>
              <CalendarDaysIcon className='h-5 w-5 mr-2'/>
              {currentDate()}
              </span>
            <span className='flex items-center mr-5 font-light'>
            <ShoppingCartIcon className='h-5 w-5 mr-1'/>
              Products: 
              {totalProducts}
              </span>
          </div>
          <div className='flex items-center'>
            <span className='flex items-center font-bold text-lg'>
              ${totalPrice}
              </span>
              <ChevronRightIcon className='h-6 w-6 text-black cursor-pointer' />
          </div>
        </div>
    </div>
  );
};

