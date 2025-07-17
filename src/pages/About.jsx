import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();
  return (
    <div className='bg-gray-100 py-10 px-4'>
      <div className='bg-white max-w-5xl mx-auto px-8 py-8 rounded-xl shadow-xl '>

        <h1 className='text-4xl font-bold text-center'>About Zaptro</h1>
        <p className='mt-7 text-gray-600 text-lg '>Welcome to <span className='text-red-600 font-medium'>Zaptro</span> , your one-stop destination for the latest and greatest in electronics. From cutting-edge gadgets to must-have accessories, we’re here to power up your tech life with premium products and unbeatable service</p>

        <div className='mt-7'>
          <h2 className='text-red-600 font-semibold text-2xl'>Our Mission</h2>
          <p className='mt-6  text-gray-600'>At Zaptro, our mission is to make innovative technology accessible to everyone. We’re passionate about connecting people with the tools and tech they need to thrive in a digital world — all at competitive prices and delivered with speed and care.</p>
        </div>

        <h2 className='text-red-600 font-semibold mt-7 text-2xl'>Why Choose Zaptro?</h2>
        <ul className='mt-6 space-y-2 text-gray-600 list-disc ps-6'>
          <li>Top-quality electronic products from trusted brands</li>
          <li>Lightning-fast and secure shipping</li>
          <li>Reliable customer support, always ready to help</li>
          <li>Easy returns and hassle-free shopping experience</li>
        </ul>
        <h2 className='text-red-600 mt-7 font-semibold text-2xl'>Our Vision</h2>
        <p className='mt-5 text-gray-600'>We envision a future where technology elevates everyday life. At Zaptro, we’re committed to staying ahead of the curve, offering cutting-edge solutions that are both practical and affordable.</p>

        <div className='text-center mt-6'>
          <h1 className='text-red-600 font-semibold text-xl'>Join the Zaptro Family</h1>
          <p className='mt-5 text-gray-600'>Whether you’re a tech enthusiast, a professional, or just looking for something cool and functional — Zaptro has something for everyone.</p>
          <button onClick={() => navigate('/product')} className='text-white cursor-pointer mt-4 bg-red-600 px-6  py-2 rounded-xl'>Start Shopping</button>
        </div>
      </div>
    </div>
  )
}

export default About