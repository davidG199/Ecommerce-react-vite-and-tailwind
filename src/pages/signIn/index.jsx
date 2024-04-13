import Layout from '../../components/layout';
import SignInImg from '../../../public/signInImg.jpg'

function SignIn() {
  return (
    <Layout>
      <div className='px-10'>
        <div class='bg-gray-100 flex justify-center items-center h-[500px] rounded-lg'>
          <div class='w-1/2 h-full hidden lg:block rounded-l-lg aspect-video'>
            <img
              src={SignInImg}
              alt='img-signIn'
              class='object-cover w-full h-full rounded-l-lg'
            />
          </div>
          <div class='lg:py-10 lg:px-16 sm:py-8 sm:px-32 p-8 w-full lg:w-1/2'>
            <h1 class='text-2xl font-semibold mb-4'>Sign In</h1>
            <form action='#' method=''>
              <div class='mb-4'>
                <label for='username' class='block text-gray-600'>
                  Username
                </label>
                <input
                  type='text'
                  id='username'
                  name='username'
                  class='w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-gray-800'
                  autocomplete='off'
                />
              </div>
              <div class='mb-4'>
                <label for='password' class='block text-gray-600'>
                  Password
                </label>
                <input
                  type='password'
                  id='password'
                  name='password'
                  class='w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-gray-800'
                  autocomplete='off'
                />
              </div>
              <button
                type='submit'
                class=' bg-neutral-950 hover:bg-neutral-900 text-white font-semibold rounded-lg py-2 px-4 w-full'
              >
                Login
              </button>
            </form>
            <div class='mt-6 text-blue-500 text-center'>
              <a href='#' class='hover:underline'>
                Sign up Here
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SignIn;
