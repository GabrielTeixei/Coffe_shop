import { useState } from 'react'
import './App.css'
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
import  assets  from './assets/imgs/assets';

function App() {

  const [count, setCount] = useState(0)
  const [nav , setNav] = useState(false)
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate('/Coffe');
  };

  return (
    <>
      <div className='relative'>
        <div className='absolute top-0 left-0 w-full h-screen bg-black/50 text-white'>
          <nav className='nav_style text-white lg:flex items-center p-5 justify-between'>
            <div className='flex items-center justify-between'>
            <div className='flex border-1 gap-2 p-1  items-center bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 rounded-md'>
              <CiSearch size={35}/>
              <input type='text' placeholder='Search' className='outline-none bg-transparent'></input>
            </div>
            <div className='cursor-pointer lg:hidden'>
              <GiHamburgerMenu onClick={()=>{setNav(!nav)}} size={35}/>
              </div>
            </div>
            <ul className='lg:flex gap-20 text-[0.9rem] hidden'>
              <li className='cursor-pointer'>HOME</li>
              <li className='cursor-pointer'>ABOUT US</li>
              <li className='cursor-pointer'>MENU</li>
              <li className='cursor-pointer'>DELIVERY</li>
            </ul>
            <div className='cursor-pointer mr-[1rem] hidden lg:block'>
              <CiShoppingCart  size={35}/></div>
          </nav>
          <div>
          <ul className={nav?'lg:flex-row flex flex-col gap-5 mx-auto text-center lg:gap-20 p-[2.3rem] text-[3rem] lg:text-[0.9rem] absolute bg-black top-0 left-0 h-screen w-full md:w-[70%] duration-1000 ':'duration-1000 top-[-100%] hidden'}>
              <li className='ml-[90%] top-[-1rem cursor-poiter]'><RxCross1 onClick={()=>{setNav(!nav)}}/></li>
              <li className='cursor-pointer'>HOME</li>
              <li className='cursor-pointer'>ABOUT US</li>
              <li className='cursor-pointer'>MENU</li>
              <li className='cursor-pointer'>DELIVERY</li>
            </ul>
          </div>
          <div className='mt-[6%] lg:mt-[4%] w-full lg:w-[50%] mx-auto'>
            <div><p className='subtitle text-center lg:text-[1.5rem] lg:text-left font-bold'>Where every sip tell a story...</p></div>
            <div><h1 className='title text-[5rem] lg:text-[8rem] font-bold mx-auto text-center lg:text-left'>Brew & Blend Coffe</h1></div>
            <div className='mx-auto lg:mx-0 text-center text-[1.3rem] bg-yellow-800 w-[80%] md:w-[70%] lg:w-[50%] font-bold px-2 py-3 border-2 border-yellow-800 rounded-[1.5rem]'> 
              <button onClick={handleOrderNow}> Order Now</button>
          </div>
          </div>
        </div>
        <img className='w-full top-0 left-0 h-screen object-cover ' src={assets.coffe1} alt="Coffee" />
      </div>
    </>
  )
}

export default App