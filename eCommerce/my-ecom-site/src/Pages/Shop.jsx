import React from 'react'
import  Hero  from '../Components/Hero';
import Popular from '../Components/Popular/popular'
import Offers from '../Components/Offers/offers'
import NewCollections from '../Components/NewCollections/NewCollection'
import NewsLetter from '../Components/NewsLetter/NewsLetter'

export const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}

export default Shop;
