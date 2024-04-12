import { useContext } from "react";
import { Link } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../context";
import { totalPrice } from "../../utils";
import OrderCard from "../orderCard";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(
      (product) => product.id != id
    );
    context.setCartProducts(filteredProducts);

    context.setCount(context.count - 1)
  };

  const handleCheckout = () => {
    const orderToAdd = {
      date: '01.02.24',
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts)
    }
    context.setOrder([...context.order, orderToAdd])
    context.setCartProducts([])
    context.closeCheckoutSideMenu()
    context.setSearchByTitle(null)
  }

  return (
    <aside
      className={`${
        context.isCheckoutSideMenu ? "flex" : "hidden"
      } w-4/5 max-h-[calc(100vh-100px)]  md:w-[450px] md:max-h-[calc(100vh-60px)] md:right-0 right-7 rounded-lg md:rounded-none flex-col fixed border border-black bg-white md:top-[68px] top-[80px]`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className=" font-medium text-xl">My order</h2>
        <div>
          <XMarkIcon
            onClick={() => context.closeCheckoutSideMenu()}
            className="h-6 w-6 cursor-pointer"
          />
        </div>
      </div>
      <div
        className=' flex-1 px-6 overflow-y-scroll [&::-webkit-scrollbar]:w-2
      [&::-webkit-scrollbar-track]:rounded-full
      [&::-webkit-scrollbar-track]:bg-gray-100
      [&::-webkit-scrollbar-thumb]:rounded-full
      [&::-webkit-scrollbar-thumb]:bg-gray-300 '
      >
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className="px-6 py-4">
        <p className="flex justify-between items-center pb-4 pt-2 border-t font-medium">
          <span className=" text-lg  ">Total:</span>
          <span className=" text-xl">
            ${totalPrice(context.cartProducts)}
          </span>
        </p>
        <Link to='/my-orders/last'>
        <button 
        onClick={() => handleCheckout()}
        className=' bg-neutral-950 text-white w-full rounded-lg py-3 hover:bg-neutral-900'
        >
          Checkout
        </button>
        </Link>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
