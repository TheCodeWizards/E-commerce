import React from 'react'
import { Link } from 'react-router-dom'
import useCart from '../Hooks/Cart'

const ProductList = ({ product }) => {
    const { addToCart } = useCart()
   
    return (
        <div className='flex flex-row  items-center md:gap-x-8 gap-3  bg-gray-100  md:p-4 p-2.5 mb-4 rounded-md space-y-'>
            <Link to={`/product/${product.id}`}>
                <img src={product.image} className='md:h-60 md:min-w-[230px] h-25 w-25  rounded-md' alt='no image' />
            </Link>
            <div>
                <Link to={`/product/${product.id}`}>
                    <h1 className='font-bold hover:text-red-500 line-clamp-3  md:w-full w-[130px] text-lg  md:text-xl'>{product.title}</h1>
                </Link>
                <p className='font-bold mt-2 text-lg md:text-3xl'>
                    <span className='md:text-lg text-sm font-medium'>$</span>{product.price}
                    <span className='font-medium text-sm md:text-lg'>({product.discount}% off)</span>
                </p>
                <p className='mt-1 text-sm'>Free delivery</p>
                <p>Or Fatest delivery <span className='font-medium'>Tommorow</span></p>
                <button onClick={() => addToCart(product)} className='px-3 py-1 cursor-pointer hover:bg-red-600 duration-150 bg-red-500 text-white font-medium rounded-md mt-2'>Add To Cart</button>
            </div>
        </div>
    )
}

export default ProductList