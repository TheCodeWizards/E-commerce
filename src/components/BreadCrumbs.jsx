import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumbs = ({title,id}) => {
  return (
    <div>
        <p className='md:text-xl md:font-medium'>
          <span><Link to='/'>Home</Link> / </span>
          <span><Link to='/product'>Products</Link> / </span>
          <span><Link to={`/product/${id}`}>{title}</Link> </span>
          
          </p>
    </div>
  )
}

export default BreadCrumbs