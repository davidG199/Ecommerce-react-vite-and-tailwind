import { useContext } from "react";
import Card from "../../components/card";
import Layout from "../../components/layout";
import ProductDetail from "../../components/productDetail";
import { ShoppingCartContext } from "../../context";

function Home() {
  const context = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg place-items-center mb-20'>
        {context.items?.map((item) => (
          <Card
           key={item.id}
            data={item} />
        ))}
      </div>
      <ProductDetail/>
    </Layout>
  );
}

export default Home;
