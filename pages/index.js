import React from 'react'

const Home = () => {
  return (
    <>
      Herobanner
      <div className="products-heading">
        <h2>Best selling products.</h2>
        <p>Speakers of many variatons.</p>
      </div>
      <div className="products-container">
        {['product1', 'product2'].map((product)=>product)}
      </div>

      Footer

    </>
  )
}

export default Home