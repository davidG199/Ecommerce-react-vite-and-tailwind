import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../context";
import OrderCard from "../orderCard";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);
  console.log("cart", context.cartProducts);

  return (
    <aside
      className={`${
        context.isCheckoutSideMenu ? "flex" : "hidden"
      } w-[360px] h-[calc(100vh-80px)] flex-col fixed right-0 border border-black bg-white rounded-lg top-20 overflow-y-scroll`}
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
      <div className='px-6'>
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
          />
        ))}
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
