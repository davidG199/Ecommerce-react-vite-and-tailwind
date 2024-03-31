import {ShoppingCartIcon} from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../context';


const Navbar = () => {
  const context = useContext(ShoppingCartContext)
  const activeStyle = 'underline underline-offset-4'

  return (
    <nav className='flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0 bg-slate-100 opacity-95'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink
            to='/'
            >
            Shopi
          </NavLink>
        </li>
        <li className=' hover:border-b border-black'>
          <NavLink 
          to='/'
          onClick={() => context.setSearchByCategory()}
          className={({ isActive }) => isActive ? activeStyle : undefined
            } >
            All
            </NavLink>
        </li>
        <li className=' hover:border-b border-black'>
          <NavLink 
          to='/clothes'
          onClick={() => context.setSearchByCategory('clothes')}
          className={({ isActive }) => isActive ? activeStyle : undefined
            }>
            Clothes
            </NavLink>
        </li>
        <li className=' hover:border-b border-black'>
          <NavLink 
          to='/electronics'
          onClick={() => context.setSearchByCategory('electronics')}
          className={({ isActive }) => isActive ? activeStyle : undefined
            }>
            Electronics
            </NavLink>
        </li>
        <li className=' hover:border-b border-black'>
          <NavLink 
          to='/furnitures'
          onClick={() => context.setSearchByCategory('furnitures')}
          className={({ isActive }) => isActive ? activeStyle : undefined
            }>
            Furnitures
            </NavLink>
        </li>
        <li className=' hover:border-b border-black'>
          <NavLink 
          to='/toys'
          onClick={() => context.setSearchByCategory('toys')}
          className={({ isActive }) => isActive ? activeStyle : undefined
            }>
            Toys
            </NavLink>
        </li>
        <li className=' hover:border-b border-black'>
          <NavLink 
          to='/others'
          onClick={() => context.setSearchByCategory('others')}
          className={({ isActive }) => isActive ? activeStyle : undefined
            }>
            Others
            </NavLink>
        </li>
      </ul>
      
      <ul className='flex items-center gap-3'>
        <li className=' text-black/60'>oetodo@cesde.net</li>
        <li className=' hover:border-b border-black'>
          <NavLink 
          to='/my-orders'
          className={({ isActive }) => isActive ? activeStyle : undefined
            }>
            My orders
            </NavLink>
        </li>
        <li className=' hover:border-b border-black'>
          <NavLink 
          to='/my-account'
          className={({ isActive }) => isActive ? activeStyle : undefined
            }>
            My account
            </NavLink>
        </li>
        <li className=' hover:border-b border-black'>
          <NavLink 
          to='/signIn'
          className={({ isActive }) => isActive ? activeStyle : undefined
            }>
            Sign in
            </NavLink>
        </li>
        <li className='flex justify-center items-center'>
          <ShoppingCartIcon
          className='h-6 w-6 me-1'
          />
            {context.count}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
