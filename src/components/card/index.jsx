import { PlusIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context";

const Card = (data) => {
  const context = useContext(ShoppingCartContext);

  return (
    <div
     className=" bg-slate-100 cursor-pointer w-56 h-60 rounded-lg shadow-lg"
     onClick={() => context.openProductDetail()}
     >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {data?.data?.category.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={data?.data?.images[0]}
          alt={data.data.title}
        />
        <button
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 hover:scale-110"
          onClick={(e) =>{
              e.stopPropagation();
              context.setCount(context.count + 1)}}
        >
          <PlusIcon className="h-3 w-3" />
        </button>
      </figure>
      <span className="flex justify-between ps-2">
        <span className="text-sm font-light">{data.data.title}</span>
        <span className="text-lg font-medium">${data.data.price}</span>
      </span>
    </div>
  );
};

export default Card;
