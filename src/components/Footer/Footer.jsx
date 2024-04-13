import instagram from "../../../public/instagram.svg";
import facebook from "../../../public/facebook.svg";
import twitter from "../../../public/twitter.svg";
import youtube from "../../../public/youtube.svg";
import Layout from "../layout";

function footer() {
  return (
    <footer className=" bg-neutral-900 text-white pt-5  w-full mt-10 relative bottom-0 -z-1">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-8">
        <div className="flex flex-col justify-center items-center ">
          <a href="" className='font-semibold text-lg'>About us </a>
          <p className="font-light text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Praesentium voluptates nostrum quod in a placeat maxime aliquid,
            aspernatur culpa officia tempora eius unde vitae fugiat dolore
            minima. Quidem, nulla rem!
          </p>
        </div>
        <div className="flex flex-col justify-center items-center mt-3">
          <a href="" className='font-semibold text-lg'>Categories </a>
          <ul className=' list-disc font-light'>
            <li>
              <a href="">Clothes</a>
            </li>
            <li>
              <a href="">Electronics </a>
            </li>
            <li>
              <a href="">Furnitures</a>
            </li>
            <li>
              <a href="">Shoes</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center mt-5 font-light">
          <p className='font-semibold text-lg'>Information</p>
          <a href="">Contact us </a>
          <a href="">Afiliates </a>
          <a href="">Resources </a>
          <a href="">Terms & conditions </a>
          <a href="">Private policy </a>
        </div>
        <div className="flex flex-row justify-center items-center mt-3 gap-4">
          <a href="">
            <img src={instagram} alt="icon-instagram" className="w-6 h-6" />
          </a>
          <a href="">
            <img src={facebook} alt="icon-facebook" className="w-6 h-6" />
          </a>
          <a href="">
            <img src={twitter} alt="icon-twitter" className="w-6 h-6" />
          </a>
          <a href="">
            <img src={youtube} alt="icon-yotube" className="w-6 h-6" />
          </a>
        </div>
      </div>
      <div className="w-full text-center bg-neutral-950 py-4 mt-5">
        <span>Copyrigth &#169;</span>
        <span>Design by David Gomez</span>
      </div>
    </footer>
  );
}

export default footer;
