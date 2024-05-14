import { useContext } from "react";
import Layout from "../../components/layout";
import { ShoppingCartContext } from "../../context";


function MyAccount() {
  const userData = JSON.parse(localStorage.getItem("user")) || [];
  const user = userData[0];

  const context = useContext(ShoppingCartContext)  

  const Logout = () =>{
    localStorage.removeItem("user")
    window.location.href = "/"
  }

  return (
    <Layout>
      <div className="w-[500px] text-center bg-slate-50 p-5 rounded-lg shadow-lg">
        <h1 className=" font-bold text-xl text-center">My account</h1>
        <div className="grid grid-cols-2 grid-rows-2 gap-5 my-5">
          <div className="flex flex-col">
            <span className='font-medium'>User:</span>
            <span className='font-light'>{user?.userName}</span>
          </div>
          <div className="flex flex-col">
            <span className='font-medium'>Email:</span>
            <span className='font-light'>{user?.email}</span>
          </div>
          <div className="flex flex-col">
            <span className='font-medium'>user Id:</span>
            <span className='font-light'>{user?.id}</span>
          </div>
          <div className="flex flex-col">
            <span className='font-medium'>Orders:</span>
            <span className='font-light'>{context.order.length}</span>
          </div>
        </div>
        <button 
        className='text-center bg-neutral-950 hover:bg-neutral-900 text-white p-2 px-4 rounded-lg'
        onClick={Logout}
        >Logout</button>
      </div>
    </Layout>
  );
}

export default MyAccount;
