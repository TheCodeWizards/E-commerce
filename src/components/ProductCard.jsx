import React from 'react'
import { Link } from 'react-router-dom'
import useCart from '../Hooks/Cart'

const ProductCard = ({ product }) => {
    const { addToCart } = useCart()
    return (
        <div>

            <div
                className='bg-white border-1 rounded-md shadow cursor-pointer border-gray-100 hover:shadow-xl hover:scale-[1.05] duration-150 p-2 md:p-3'>
                <Link to={`/product/${product.id}`}>
                    <img src={product.image} alt={product.title} className='md:w-[200px] md:h-[180px] w-[140px] h-[140px]' />
                    <h1 className='line-clamp-2 mt-2 font-medium'>{product.title}</h1>
                    <p className='font-bold mt-2'>${product.price}</p>
                </Link>
                <button onClick={() => addToCart(product)} className='bg-red-500 cursor-pointer rounded-md hover:bg-red-600 duration-100 text-white w-full md:px-4 p-2 py-2 md:text-lg mt-3'>
                    <i className="fa-solid fa-cart-shopping me-3 "></i>Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductCard