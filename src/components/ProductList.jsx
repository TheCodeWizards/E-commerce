import React from 'react'
import { Link } from 'react-router-dom'
import useCart from '../Hooks/Cart'

const ProductList = ({ product }) => {
    const { addToCart } = useCart()
    return (
        <div className='flex items-center gap-x-8  bg-gray-100 p-4 mb-4 rounded-md space-y-'>
            <Link to={`/product/${product.id}`}>
                <img src={product.image} className='min-w-[230px] h-[230px]  rounded-md' alt='no image' />
            </Link>
            <div>
                <Link to={`/product/${product.id}`}>
                    <h1 className='font-bold hover:text-red-500 text-xl'>{product.title}</h1>
                </Link>
                <p className='font-bold mt-2 text-3xl'>
                    <sup className='text-lg font-medium'>$</sup>{product.price}
                    <sup className='font-medium text-lg'>({product.discount}% off)</sup>
                </p>
                <p className='mt-1'>Free delivery</p>
                <p>Or Fatest delivery <span className='font-medium'>Tommorow,</span></p>
                <button onClick={() => addToCart(product)} className='px-3 py-1 cursor-pointer hover:bg-red-600 duration-150 bg-red-500 text-white font-medium rounded-md mt-2'>Add To Cart</button>
            </div>
        </div>
    )
}

export default ProductList