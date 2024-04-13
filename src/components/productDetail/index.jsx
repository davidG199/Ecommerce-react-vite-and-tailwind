import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../context";

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);
  const { images, title, price, description } = { ...context.productToShow };

  return (
    <div>
      {context.isProductDetailOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 -z-1'></div>
      )}
    
    <aside
      className={`${
        context.isProductDetailOpen ? "flex" : "hidden"
      } w-[360px] h-[calc(100vh-60px)] flex-col fixed right-0 top-[68px] bg-gray-50 rounded-lg z-10`}
    >
      
      <figure className=" w-full h-96 relative">
        <img className="aspect-video h-full" src={images} alt={title} />
        <div>
          <XMarkIcon
            onClick={() => context.closeProductDetail()}
            className="h-8 w-8 cursor-pointer absolute top-5 right-5 md:hover:animate-spin"
          />
        </div>
      </figure>
      <div
        className="flex flex-col p-6 overflow-y-scroll [&::-webkit-scrollbar]:w-2
      [&::-webkit-scrollbar-track]:rounded-full
      [&::-webkit-scrollbar-track]:bg-gray-100
      [&::-webkit-scrollbar-thumb]:rounded-full
      [&::-webkit-scrollbar-thumb]:bg-gray-300"
      >
        <span className='flex items-center justify-between mb-4'>
          <span className="font-semibold text-lg">{title}</span>
          <span className="font-medium text-2xl ms-3">${price}</span>
        </span>
        <span className="font-light text-sm">{description}</span>
      </div>
    </aside>
    </div>
  )
};

export default ProductDetail;
