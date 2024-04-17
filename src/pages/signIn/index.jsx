import { Link } from 'react-router-dom';
import Layout from '../../components/layout';
import SignInImg from '../../../public/signInImg.jpg'

function SignIn() {
  return (
    <Layout>
      <div className='shadow-md h-[400px]'>
        <div className='bg-gray-100 flex justify-center items-center h-full rounded-lg'>
          <div className='w-1/2 h-full hidden lg:block rounded-l-lg aspect-video'>
            <img
              src={SignInImg}
              alt='img-signIn'
              className='object-cover w-full h-full rounded-l-lg'
            />
          </div>
          <div className='lg:py-10 lg:px-8 sm:py-8 sm:px-32 p-8 w-full h-full lg:w-1/2'>
            <h1 className='text-2xl font-semibold mb-8'>Sign In</h1>
            <form action='#' method=''>
              <div className='mb-4'>
                <label htmlFor='username' className='block text-gray-600'>
                  Username
                </label>
                <input
                  type='text'
                  id='username'
                  name='username'
                  className='w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-gray-800'
                  autoComplete='off'
                />
              </div>
              <div className='mb-4'>
                <label htmlFor='password' className='block text-gray-600'>
                  Password
                </label>
                <input
                  type='password'
                  id='password'
                  name='password'
                  className='w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-gray-800'
                  autoComplete='off'
                />
              </div>
              <button
                type='submit'
                className=' bg-neutral-950 hover:bg-neutral-900 text-white font-semibold rounded-lg py-2 px-4 w-full'
              >
                Login
              </button>
            </form>
            <div className='mt-6 text-blue-500 text-center'>
              <Link to='/signUp' className='hover:underline'>
                Sign up Here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SignIn;
