import React, { useState } from 'react'
import useLocation  from '../Hooks/Location'
import useCart from '../Hooks/Cart';
import ResponsiveMenu from './ResponsiveMenu';
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [active, setActive] = useState('home');
  const [opennav, setOpennav] = useState(false);
  const { cart } = useCart();
  const {getLocation,location} = useLocation()
  
  return (
    <div className='bg-white px-2 shadow-xl py-3 '>
      <div className='flex items-center justify-between max-w-6xl mx-auto'>
        {/* Logo  */}
        <div className='flex items-center gap-6'>
          <Link to='/'>
            <h1 onClick={() => setActive('home')} className='text-3xl font-bold'><span className='text-red-500 font-serif'>Z</span>aptro</h1>
          </Link>
          {/* location */}
          <button disabled={location?true: false}  onClick={() => getLocation()} className='font-semibold text-lg cursor-pointer'><i className="fa-solid text-red-500 text-lg fa-location-crosshairs"></i> {location? <span>{location.city},{location.state}</span> :'Get Location' }</button>
        </div>
        {/* Menu Section */}
        <div className='flex  items-center justify-between gap-7  '>
          <ul className='md:flex  items-center hidden  text-xl font-semibold gap-7'>
            <Link to='/'><li onClick={() => setActive('home')} className={active === 'home' ? 'border-b-3 border-b-red-500' : ''}>Home</li></Link>
            <Link to='/product'><li onClick={() => setActive('product')} className={active === 'product' ? 'border-b-3 border-b-red-500' : ''} >Product</li></Link>
            <Link to='/about'><li onClick={() => setActive('about')} className={active === 'about' ? 'border-b-3 border-b-red-500' : ''} >About</li></Link>
            <Link to='/contact'><li onClick={() => setActive('contact')} className={active === 'contact' ? 'border-b-3 border-b-red-500' : ''} >Contact</li></Link>
          </ul>
          <Link to='/cart'>
            <div onClick={() => setActive('')}  className='relative'>
              <i className="fa-solid fa-cart-shopping text-[22px]"></i>
              <span className='absolute px-1.5 mt-[-8px] ms-[-10px] bg-red-500 py-0.25 rounded-full text-white text-sm'>
                {cart?.length}
              </span>
            </div>
          </Link>
          <button className='md:hidden block' onClick={() => setOpennav((prev) => !prev)}><i className="fa-solid hidden  text-2xl fa-bars"></i></button>
          <div className='hidden md:block'>
            <SignedOut>
              <SignInButton className="bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer" />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
        {
          opennav ?
            <ResponsiveMenu opennav={opennav} setOpennav={setOpennav} />
            :
            ''
        }
      </div>
    </div>
  )
}

export default Navbar