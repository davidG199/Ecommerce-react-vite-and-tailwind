import { XMarkIcon } from "@heroicons/react/24/solid";

export const OrdersCard = (props) => {
  const { totalPrice, totalProducts } = props;

  return (
    <div className="flex justify-between items-center mb-3 border border-black">
        <p>
            <span>25.03.2024</span>
            <span>{totalProducts}</span>
            <span>{totalPrice}</span>
        </p>
    </div>
  );
};

