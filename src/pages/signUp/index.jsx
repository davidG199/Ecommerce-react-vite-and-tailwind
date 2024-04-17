import Layout from "../../components/layout";
import { Link } from "react-router-dom";
import { ArrowLongLeftIcon } from "@heroicons/react/16/solid";

function SignUp() {
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
              required
              name="userName"
              className="border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-gray-800 mb-0 sm:mb-2"
            />
            <label htmlFor="Email">Email</label>
            <input
              type="emal"
              required
              name="Email"
              className="border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-gray-800"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">password</label>
            <input
              type="password"
              required
              name="password"
              className="border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-gray-800 mb-0 sm:mb-2"
            />
            <label htmlFor="confirmPassword">Confirm password</label>
            <input
              type="password"
              required
              name="confirmPassword"
              className="border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-gray-800"
            />
          </div>
        </form>
        <div className="mt-8 text-white text-center">
          <Link to="/" className="h-6 w-6 bg-neutral-950 p-2 px-6 rounded-lg hover:bg-neutral-800">
            Register
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default SignUp;
