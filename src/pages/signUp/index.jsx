import Layout from "../../components/layout";
import { Link } from "react-router-dom";
import { ArrowLongLeftIcon } from "@heroicons/react/16/solid";
import { useState } from "react";


function SignUp() {

  let min = 10000;
  let max = 99990;

  let randomId = Math.floor(Math.random()* (max-min+1) +min)

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    id: randomId
  });
  const user = JSON.parse(localStorage.getItem("user")) || []

//obtener los valores de los inputs
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  //manda los datos obtenidos al localStorage

  const handleSubmit = (event) => {
    event.preventDefault();

    const newUSer = { ...formData };
    const updateUser = [...user, newUSer];

    if(newUSer.password === newUSer.confirmPassword){
      localStorage.setItem("user", JSON.stringify(updateUser));
      alert("Registered user")
      window.location.href = "/signIn";
    } else{
      alert("Passwords do not match")
    }


  };



  return (
    <Layout>
      <div className=" bg-neutral-200 flex flex-col justify-center items-center p-8 md:p-10 font-light rounded-lg shadow-md">
        <div className="flex justify-center items-center mb-5">
          <Link to="/signIn">
            <ArrowLongLeftIcon className="h-6 w-6 hover:scale-110 relative md:left-[-150px] left-[-40px]" />
          </Link>
          <h2 className=" font-semibold text-lg">Sign Up</h2>
        </div>
        <form action="" className="grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-8  ">
          <div className="flex flex-col">
            <label htmlFor="userName">userName</label>
            <input
              type="text"
              name="userName"
              className="border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-gray-800 mb-0 sm:mb-2"
              id="userName"
              value={formData.name}
              onChange={handleInputChange}
            />
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              className="border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-gray-800"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">password</label>
            <input
              type="password"
              name="password"
              className="border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-gray-800 mb-0 sm:mb-2"
              id="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <label htmlFor="confirmPassword">Confirm password</label>
            <input
              type="password"
              name="confirmPassword"
              className="border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-gray-800"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
          </div>
        </form>
        <div className="mt-8 text-white text-center w-full">
          <button 
          type="submit" 
          className="h-8 w-20 bg-neutral-950  rounded-lg hover:bg-neutral-800 text-center "
          onClick={handleSubmit}>
            Register
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default SignUp;
