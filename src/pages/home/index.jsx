import { useContext } from "react";
import Card from "../../components/card";
import Layout from "../../components/layout";
import ProductDetail from "../../components/productDetail";
import { ShoppingCartContext } from "../../context";

function Home() {
  const context = useContext(ShoppingCartContext);

  //Renderiza los productos filtrados
  const RenderView = () => {
    if (context.isLoading) {
      //skeleeton load
      return (
        <div className=" flex absolute top-80">
          <div className="flex items-center justify-center">
            <div
              className="w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"
            ></div>
            <p className="ml-2">cargando...</p>
          </div>
        </div>
      );
    }

    let itemsToRender = context.filteredItems;

    if (context.searchByCategory) {
      itemsToRender = itemsToRender.filter(
        (item) =>
          item.category.name.toLowerCase() ===
          context.searchByCategory.toLowerCase()
      );
    }
    
    if (itemsToRender?.length > 0) {
      return itemsToRender.map((item) => <Card key={item.id} data={item} />);
    } else {
      return <div>No hay productos disponibles.</div>;
    }
  };

  return (
    <Layout>
      <div className="flex items-center w-80 relative justify-center">
        <h1 className="mb-5 font-bold text-2xl">Exclusive products</h1>
      </div>
      <input
        type="text"
        placeholder="Search a product"
        className="rounded-lg border border-black w-80 p-3 mb-4"
        onChange={(event) => context.setSearchByTitle(event.target.value)}
      />
      <div className="grid place-items-center gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-x border-white max-w-screen-lg mb-20 mt-5">
        {RenderView()}
      </div>
      <ProductDetail />
    </Layout>
  );
}

export default Home;
