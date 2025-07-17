import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Loader from '../components/Loader';
import ProductList from '../components/ProductList';

const Category = () => {
    const { category } = useParams()
    const navigate = useNavigate();
    const [productList, setProductList] = useState();

    const getCategory = async () => {
        const url = `https://fakestoreapi.in/api/products/category?type=${category}`
        try {
            const res = await fetch(url);
            if (!res.ok) throw new Error(`Response status: ${res.status}`);
            const result = await res.json();
            setProductList(result.products)

        }
        catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        getCategory();
        window.scrollTo(0,0)
    }, [category])

    return (
        <div className='max-w-6xl mx-auto py-10 px-4'>
            {
                productList ?
                    <>
                        <button onClick={() => navigate('/')} className='bg-black cursor-pointer px-4 text-white rounded-md py-1.5 font-medium'><i className="fa-solid me-2 fa-arrow-left"></i>Back</button>
                        <div className='mt-6'>
                            
                        {productList.map((product) => (
                            <ProductList key={product.id} product={product} />
                        ))}
                        </div>
                    </>
                    :
                    <Loader />
            }
            { }
        </div>
    )
}

export default Category