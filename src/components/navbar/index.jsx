import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../context';

const Navbar = () => {
  const context = useContext(ShoppingCartContext);
  const activeStyle = 'underline underline-offset-4';

  return (
    <nav className='flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0 bg-black text-white opacity-95'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg mr-5'>
          <NavLink to='/'>Shopi</NavLink>
        </li>
        <li className=' hover:border-b border-white'>
          <NavLink
            to='/'
            onClick={() => context.setSearchByCategory()}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li className=' hover:border-b border-white'>
          <NavLink
            to='/clothes'
            onClick={() => context.setSearchByCategory('clothes')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Clothes
          </NavLink>
        </li>
        <li className=' hover:border-b border-white'>
          <NavLink
            to='/electronics'
            onClick={() => context.setSearchByCategory('electronics')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        <li className=' hover:border-b border-white'>
          <NavLink
            to='/furnitures'
            onClick={() => context.setSearchByCategory('furniture')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Furnitures
          </NavLink>
        </li>
        <li className=' hover:border-b border-white'>
          <NavLink
            to='/shoes'
            onClick={() => context.setSearchByCategory('shoes')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Shoes
          </NavLink>
        </li>
        <li className=' hover:border-b border-white'>
          <NavLink
            to='/miscellaneous'
            onClick={() => context.setSearchByCategory('Miscellaneous')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Miscellaneous
          </NavLink>
        </li>
      </ul>

      <ul className='flex items-center gap-3'>
        <li className=' hover:border-b border-white'>
          <NavLink
            to='/my-orders'
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My orders
          </NavLink>
        </li>
        <li className=' hover:border-b border-white'>
          <NavLink
            to='/my-account'
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My account
          </NavLink>
        </li>
        <li className=' hover:border-b border-white'>
          <NavLink
            to='/signIn'
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sign in
          </NavLink>
        </li>
        <li className='flex justify-center items-center ml-5'>
          <ShoppingCartIcon
            className='h-6 w-6 me-1 cursor-pointer'
            onClick={() => {
              context.openCheckoutSideMenu();
            }}
          />
          {context.cartProducts.length}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
