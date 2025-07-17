import React, { useContext } from 'react'
import useCart from '../Hooks/Cart'
import emptyCart from '../assets/empty-cart.png'
import { Link } from 'react-router-dom';
// import {useLocation} from '../Hooks/Location'
import { locationContext } from '../context/LocationContext';
const Cart = () => {
    const { cart, removeFromCart,updateQuantity } = useCart();

    const total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);

    const {location,getLocation} = useContext(locationContext)

    return (

        <div className='pb-10 px-4 max-w-6xl mx-auto'>
            {
                cart.length > 0 ?
                    <div>
                        <h1 className='text-2xl my-10 font-bold'>My Cart ({cart.length})</h1>
                        {cart.map((item) => (
                            <div key={item.id} className='bg-gray-100 rounded-md mt-4  md:py-5 py-1.5 md:px-6 px-1.5 gap-4 flex items-center justify-between'>
                                <Link to={`/product/${item.id}`}>
                                <div className='flex items-center max-w-sm gap-3'>
                                    <img className='md:w-[75px] w-[60px] rounded-md ' src={item.image} alt={item.title} />
                                    <div>
                                        <h1 className='line-clamp-2 md:text-[18px] text-sm'>{item.title}</h1>
                                        <p className='text-red-500 font-medium'>${item.price}</p>
                                    </div>
                                </div>
                                </Link>
                                <div className='flex items-center bg-red-500 text-xl text-white px-3 py-1 md:py-2 space-x-2 md:space-x-4 font-bold rounded-md'>
                                    <button onClick={()=>updateQuantity(item.id,'decrease')} className='cursor-pointer md:px-2'>-</button>
                                    <p>{item.quantity}</p>
                                    <button onClick={()=>updateQuantity(item.id,'increase')} className='cursor-pointer md:px-2 '>+</button>
                                </div>
                                <div>
                                    <i onClick={() => removeFromCart(item.id)} className="fa-solid text-xl cursor-pointer hover:shadow-xl hover:scale-[1.05] duration-150 hover:bg-white rounded-full px-2 md:px-3 py-2.5 text-red-500 fa-trash"></i>
                                </div>
                            </div>

                        ))
                        }
                        <div className='grid grid-cols-1 md:grid-cols-2 items-start md:mt-6 mt-4 md:gap-y-0 gap-y-4 gap-x-15'>
                            {/* Delivery Info */}
                            <div className=' bg-gray-100 rounded-md p-7 px-7 space-y-2'>
                                <h1 className='text-xl font-bold'>Delivery Info</h1>
                                <div className='flex flex-col space-y-1 mt-4'>
                                    <label htmlFor="">Full Name</label>
                                    <input  className='bg-white rounded-md border-1 border-gray-300 outline-none p-2' placeholder='Enter Your Name' type="text" name="" id="" />
                                </div>
                                <div className='flex flex-col space-y-1'>
                                    <label htmlFor="">Address</label>
                                    <input className='bg-white rounded-md border-1 border-gray-300 outline-none p-2' placeholder='Enter Your Address ' type="text" name="" id="" />
                                </div>
                                <div className='flex w-full items-center gap-7 justify-between'>
                                    <div className='flex flex-1 flex-col space-y-1'>
                                        <label htmlFor="">State</label>
                                        <input value={location? location.state:''} className='bg-white w-full rounded-md border-1 border-gray-300 outline-none p-2' placeholder='Enter Your State' type="text" name="" id="" />
                                    </div>
                                    <div className='flex  flex-1  flex-col space-y-1'>
                                        <label htmlFor="">PostCode</label>
                                        <input value={location? location.postcode:''} className='bg-white w-full rounded-md border-1 border-gray-300 outline-none p-2' placeholder='Enter Your PostCode' type="text" name="" id="" />
                                    </div>
                                </div>
                                <div className='flex w-full items-center gap-7 justify-between'>
                                    <div className='flex flex-1 flex-col space-y-1'>
                                        <label htmlFor="">Country</label>
                                        <input value={location? location.country:''} className='bg-white w-full rounded-md border-1 border-gray-300 outline-none p-2' placeholder='Enter Your Country' type="text" name="" id="" />
                                    </div>
                                    <div className='flex  flex-1  flex-col space-y-1'>
                                        <label htmlFor="">Phone no</label>
                                        <input className='bg-white w-full rounded-md border-1 border-gray-300 outline-none p-2' placeholder='Enter Your Number' type="text" name="" id="" />
                                    </div>
                                </div>
                                <button className='bg-red-500 text-white hover:bg-red-600 duration-150 font-medium rounded-md px-3 w-full py-1.5 cursor-pointer mt-4'>Submit</button>
                                {/* <div className='py-10 text-center'>
                                    <p>-------OR--------</p>
                                    <button disabled={location? true:false} onClick={()=>getLocation()}  className='bg-red-500 inline text-white hover:bg-red-600 duration-150 font-medium rounded-md px-3  py-1.5 cursor-pointer mt-4'>
                                        Detect Location
                                    </button>
                                </div> */}
                            </div>
                            {/* Bill Details */}
                            <div className='border-1 space-y-2  border-gray-100 shadow-xl p-5 rounded-md'>
                                <h1 className='text-xl font-semibold'>Bill Details</h1>
                                <div className='flex justify-between items-center'>
                                    <p>items total</p>
                                    <p>${total}</p>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <p>Delivery Charge</p>
                                    <p>
                                        <span className='line-through'>$25</span><span className='text-red-500 ms-1 font-medium uppercase'>Free</span>
                                    </p>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <p>Handling charge</p>
                                    <p className='text-red-500'>$5</p>
                                </div>
                                <hr />
                                <div className='flex justify-between items-center font-semibold text-lg'>
                                    <h2 >Grand Total</h2>
                                    <h2>${total + 5}</h2>
                                </div>
                                <div className='mt-5'>
                                    <h2 className=' text-gray-600 font-semibold'>Apply Promo Code</h2>
                                    <div className="flex gap-3 mt-2 ">
                                        <input
                                            type='text'
                                            placeholder='Enter code'
                                            className='py-2 px-3 outline-none border-gray-300 rounded-md border w-full' name="" id="" />
                                        <button className='border-1 px-2 rounded-md border-gray-300'>Apply</button>
                                    </div>
                                    <button className='text-white w-full font-medium cursor-pointer rounded-md mt-4 bg-red-500 hover:bg-red-600 duration-150 py-2'>Proceed to checkout </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    :
                    <div className='flex flex-col justify-center items-center my-10'>
                        <h1 className='text-red-500 font-bold text-5xl'>Oh no! your cart is empty</h1>
                        <img src={emptyCart} alt="" />
                        <Link to='/product'>
                            <button className='text-white hover:bg-red-600 duration-150 bg-red-500 px-5 font-medium cursor-pointer py-2 rounded-md'>Contine Shopping</button>
                        </Link>
                    </div>
            }

        </div >
    )
}

export default Cart