import { useContext } from 'react';
import Card from '../../components/card';
import Layout from '../../components/layout';
import ProductDetail from '../../components/productDetail';
import { ShoppingCartContext } from '../../context';

function Home() {
  const context = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className='flex items-center w-80 relative justify-center'>
        <h1 className='mb-5 font-bold text-2xl'>Exclusive products</h1>
      </div>
      <input 
      type="text" 
      placeholder='Search a product' 
      className='rounded-lg border border-black w-80 p-3 mb-4'
      onChange={(event) => context.setSearchByTitle(event.target.value)}
      />
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg place-items-center mb-20'>
        {context.items?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      <ProductDetail />
    </Layout>
  );
}

export default Home;
