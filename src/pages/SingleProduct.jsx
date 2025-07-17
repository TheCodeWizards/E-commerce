import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import BreadCrumbs from '../components/BreadCrumbs'
import Loader from '../components/Loader'
import useCart from '../Hooks/Cart'

const SingleProduct = () => {
  const { id } = useParams();
  const img = useRef();
  const [singleProduct, setSingleProduct] = useState();
  const { addToCart } = useCart()


  const getSingleProduct = async () => {
    const url = `https://fakestoreapi.in/api/products/${id}`;

    try {
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error(`Response status: ${res.status}`);
      }

      const result = await res.json()
      setSingleProduct(result.product);
    }
    catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getSingleProduct();
    window.scrollTo(0, 0)
  }, [id]);


  const OriginalPrice = Math.round(singleProduct?.price + (singleProduct?.price * singleProduct?.discount / 100))


  return (
    <>
      {
        singleProduct ?
          <div className='max-w-6xl mx-auto px-4 py-10'>
            <BreadCrumbs title={singleProduct.title} id={singleProduct.id} />
            <div className='grid grid-cols-1 md:grid-cols-2 my-15 gap-10 '>
              <div className='relative'>
                <img  className='' src={singleProduct?.image} alt={singleProduct?.title} />
              </div>
              <div className='space-y-6'>
                <h1 className="md:text-3xl text-xl  font-bold">{singleProduct.title}</h1>
                <p className='uppercase'>{singleProduct.brand} /{singleProduct.category} /{singleProduct.model}</p>
                <p className='md:space-x-1'>
                  <span className='text-red-500 text-xl font-bold'>${singleProduct.price}</span>
                  {
                    singleProduct.discount ?
                      <>
                        <span className='text-xl line-through font-bold ms-1'>${OriginalPrice}</span>
                        <span className='text-white ms-2 bg-red-500 text-xl rounded-md font-bold px-2 py-1'>{singleProduct.discount}% discount</span>
                      </>
                      :
                      <>
                        <span className='text-xl line-through font-bold ms-1'>${singleProduct.price}</span>
                        <span className='text-white ms-2 bg-red-500 text-xl rounded-md font-bold px-2 py-1'>0% discount</span>
                      </>
                  }
                </p>
                <p>{singleProduct.description}</p>
                <button onClick={() => addToCart(singleProduct)} className='bg-red-500 cursor-pointer rounded-md hover:bg-red-600 duration-100 font-semibold text-white  px-10 py-2.5 md:text-lg '>
                  <i className="fa-solid fa-cart-shopping me-3 "></i>Add to Cart</button>
              </div>
            </div>
          </div>
          :
          <div>
            <Loader />
          </div>
      }
    </>

  )
}

export default SingleProduct