import { useContext} from "react";
import Card from "../../components/card";
import Layout from "../../components/layout";
import ProductDetail from "../../components/productDetail";
import { ShoppingCartContext } from "../../context";

function Home() {
  const context = useContext(ShoppingCartContext);

  //Renderiza los productos filtrados
  const RenderView = () => {
    if(context.isLoading){
      return <div>Cargando..</div> //agregar animacion de carga
    }

    let itemsToRender = context.filteredItems

    if (context.searchByCategory) {
      itemsToRender = itemsToRender.filter(
        item => item.category.name.toLowerCase() === context.searchByCategory.toLowerCase()
      );
    }else if (context.searchByCategory === 'others') {
      // Filtrar productos que no pertenecen a ninguna categoría seleccionada
      itemsToRender = itemsToRender.filter(
        item => !['clothes', 'electronics', 'furnitures', 'shoes'].includes(item.category.name.toLowerCase())
      );
    }
    if (itemsToRender?.length > 0) {
      return itemsToRender.map(item => <Card key={item.id} data={item} />);
    } else {
      return <div>No hay productos disponibles.</div>;
    }
    

      // if (context.filteredItems?.length > 0) {
      //   return context.filteredItems?.map((item) => (
      //     <Card key={item.id} data={item} />
      //   ));
      // } else {
      //   return <div>We don't have anything :</div>;
      // }
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
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg place-items-center mb-20">
        {RenderView()}
      </div>
      <ProductDetail />
    </Layout>
  );
}

export default Home;
