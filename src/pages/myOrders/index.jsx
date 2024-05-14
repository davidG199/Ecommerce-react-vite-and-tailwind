import { useContext } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/layout";
import { ShoppingCartContext } from "../../context";
import { OrdersCard } from "../../components/ordersCard";

function MyOrders() {
  const context = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className="flex items-center w-80 relative justify-center h-36">
        <h1 className="mb-5 font-bold text-2xl">MyOrders</h1>
      </div>
      <div className='mb-24'>
        {context.order.map((order, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}
            />
          </Link>
        ))}
      </div>
    </Layout>
  );
}

export default MyOrders;
