import React, { useContext, useEffect } from 'react'
import Carousel from '../components/Carousel'
import Loader from '../components/Loader'
import { DataContext } from '../context/DataContext'
import Category from '../components/Category'
import MidBanner from '../components/MidBanner'
import Feature from '../components/Feature'
import Footer from '../components/Footer'
import useData from '../Hooks/Data'

const Home = () => {
  // const {fetchAllProducts} = useData()
  //  useEffect(() => {
  //       fetchAllProducts()
  //   }, [])

  return (
    <div>
      <Carousel />
      <Category/>
      <MidBanner/>
      <Feature/>
    </div>
  )
}

export default Home