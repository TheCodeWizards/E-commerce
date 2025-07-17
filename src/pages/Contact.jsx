import React from 'react'
import address_pin from '../assets/placeholder.png'

const Contact = () => {
    return (
        <div className='min-h-screen bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center px-4 py-10'>
            <div className='backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-10 w-full max-w-5xl'>
                <h1 className='text-4xl text-white font-bold text-center'>Get in Touch with <span className='text-red-500'>Zaptro</span></h1>
                <div className='flex flex-wrap justify-between items-start gap-6 mt-10'>
                    <div className='flex-1'>
                        <h2 className='text-2xl font-semibold text-white'>Contact Info</h2>
                        <p className='text-gray-300 mt-1'>Have a question or need support? We're here to help you with your electronics journey.</p>
                        <div className='mt-7'>
                            <p className='text-white'><span className='font-bold'>📍  Address :</span> Suraj Nagri, Abohar, Punjab</p>
                            <p className='text-white'><span className='font-bold'>📧Email :</span> sakshamnwebcyst@gmail.com</p>
                            <p className='text-white'><span className='font-bold'>📞Phone :</span> +91 62808 70410</p>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <div className='flex flex-col'>
                            <label className='text-white' htmlFor="">Your Name</label>
                            <input type="text" className='bg-white rounded-xl py-2 px-4 mt-1 w-full outline-none placeholder:text-[#f2f3f5]' placeholder='John Doe' />
                        </div>
                        <div className='flex flex-col mt-7'>
                            <label className='text-white' htmlFor="">Email Address</label>
                            <input type="email" className='bg-white rounded-xl py-2 px-4 mt-1 w-full outline-none placeholder:text-[#f2f3f5]' placeholder='johndoe@example.com' />
                        </div>
                        <div className='flex flex-col mt-7'>
                            <label className='text-white' htmlFor="">Your Message</label>
                            <textarea className='bg-[#686587] p-3 rounded-xl outline-none mt-1 placeholder:text-[#f2f3f5]' placeholder='Type Your Message' rows={3} name="" id=""> </textarea>
                        </div>
                        <button className='bg-gradient-to-r from-red-500 via-pink-500 to-purple-400 text-white w-full mt-8 cursor-pointer px-3 py-2 rounded-xl font-medium'>Send Message 🚀</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact