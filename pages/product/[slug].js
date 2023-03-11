// this is the product details page
// the square brackets in the file name [] make the file name dynamic -> next js is going to dynamically render the name
// for example: we can go to product/speaker or product/head-phones
// check more: file based routing next.js

import React, { useState } from 'react';
import { client, urlFor } from '../../lib/client';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Product } from '../../components';
import { useStateContext } from '../../context/StateContext';

// component is going to be named ProductDetails
const ProductDetails = ({product, products}) => {
    const{image, name, details, price} = product;
    const [index, setIndex] = useState(0); // at start we want to look at the image under the index of 0
    const { decQty, incQty, qty, onAdd } = useStateContext(); // we can use useStateContext like a hook and here we destructure the values
  return (
    <div>
        <div className="product-detail-container">
            <div>
                <div className="image-container">
                    <img 
                      src={
                        urlFor(image && ((image[index] == undefined) ? image[0] : (image[index]))) 
                      }  
                      className="product-detail-image"
                    /> {/* render image tag, make an API call for the specific product */}
                </div>
                <div className="small-images-container">
                    {image?.map((item, i) => 
                                (
                                  <img
                                      key={i}
                                      src={urlFor(item)} 
                                      className={i === index ? 'small-image selected-image' : 'small-image'} // if i is equal to the index we want to see in detail
                                      onMouseEnter={() => setIndex(i)} // we set the index index to the one of the specific item
                                  />  
                                )
                              )
                    }
                </div> 
            </div>
            <div className="product-detail-desc">
                <h1>{name}</h1>
                <div className="reviews">
                    <div>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                    </div>
                    <p>
                        (20)
                    </p>
                </div>
                <h4>Details: </h4>
                <p>{details}</p>
                <p className="price">${price}</p>
                <div className="quantity">
                    <h3>Quantity:</h3>
                    <p className="quantity-desc">
                        <span className="minus" onClick={decQty}><AiOutlineMinus /></span>
                        <span className="num" onClick="">{qty}</span> {/* topin: bug if the onClick function stays empty we get an error : TypeError: func.apply is not a function*/}
                        <span className="plus" onClick={incQty}><AiOutlinePlus /></span>
                    </p>
                </div>
                <div className="buttons">
                    <button type="button" className="add-to-cart" onClick={() => onAdd(product,qty)}>Add to Cart</button>
                    <button type="button" className="buy-now" onClick="">Buy Now</button>
                </div>
            </div>
        </div>
        <div className="maylike-products-wrapper">
            <h2>You may also like</h2>
            <div className="marquee">
                <div 
                  className="maylike-products-container track" 
                  >
                    { // dynamic block of code, take all of our products and map over them, get our individual item and return self closing Product tag imported form /components/
                      // provide product itself, whih is here item -> topin: rename item to detailed_product?
                      products.map((item) => (
                        <Product key={item._id} product={item}/>
                      )
                      )
                    } 
                </div>
            </div>
        </div>
   </div>
  )
}

// all the links on the other products pages within the porduct detailed page have to be generated
export const getStaticPaths = async() => {
    // * get everything
    const query = `*[_type == "product"] {
        slug {
            current
        }
    }
    `; // return only the current property of a slug of each one of the products

    // ({ means we return instantly an object from a function
    const products = await client.fetch(query);
    const paths = products.map((product) =>({
        params:{
            slug: product.slug.current
        }
    }));

    return{
        paths,
        fallback: 'blocking' // Next.js: getStaticProps is called before initial render when using fallback: blocking
    }
}

// to fetch data from an API or CMS we use getStaticProps, which is another special next.js function
// You should use getStaticProps if:
//  The data required to render the page is available at build time ahead of a users request
//  The data comes from a headless CMS

export const getStaticProps = async( {params: {slug}}) => { // we can destructure params and then from outside of the params, we can get access to the actual url query [slug].js
    //we have to form a sanity query
    // * fetch all
    const query = `*[_type == "product" && slug.current =='${slug}'][0]`; // making a template string, using backticks`` , we are trying to get the product if current slug is equal slug, we only want to fetch the first product, which matches the query
    const productsQuery = '*[_type == "product"]'; // we are gonna fetch all of the products
    const product = await client.fetch(query); // get the individual product
    const products = await client.fetch(productsQuery);

    //console.log(product);

    // return an object, that use the props where we pass the products and bannerData
    return {
      props: {products, product}
    }
  }

export default ProductDetails