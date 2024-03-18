import { useState, useEffect } from "react";
import Card from "../../components/card";
import Layout from "../../components/layout";
import ProductDetail from "../../components/productDetail";

function Home() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((response) => response.json())
      .then((data) => setItems(data.slice(0,28)))
  }, []);

  return (
    <Layout>
      Home
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg place-items-center mb-20'>
        {items?.map((item) => (
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
