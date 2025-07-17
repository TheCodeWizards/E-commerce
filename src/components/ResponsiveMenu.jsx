import { useUser } from '@clerk/clerk-react'
import React from 'react'
import { Link } from 'react-router-dom'

const ResponsiveMenu = ({ opennav, setOpennav }) => {
    const {user} = useUser();
    return (
        <div
            className={`
                fixed top-0 left-0 z-50 h-screen w-[75%] max-w-xl bg-white py-10 px-7 rounded-e-2xl shadow-2xl
                transform transition-transform duration-300 ease-in-out
                ${opennav ? 'translate-x-0' : '-translate-x-full'}
            `}
        >
            <h1 className='text-2xl font-medium capitalize'>Hey! <span className='text-red-500 font-bold'> {user.firstName}</span></h1>
            <div>
                <ul className='flex flex-col space-y-6 mt-10 text-xl font-bold'>
                    <li>
                        <Link to='/' onClick={() => setOpennav(false)}>Home</Link>
                    </li>
                    <li>
                        <Link to='/product' onClick={() => setOpennav(false)}>Products</Link>
                    </li>
                    <li>
                        <Link to='/about' onClick={() => setOpennav(false)}>About</Link>
                    </li>
                    <li>
                        <Link to='/contact' onClick={() => setOpennav(false)}>Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ResponsiveMenu
