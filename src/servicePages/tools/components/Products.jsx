import { useState, useEffect, useContext } from 'react'
import { Context } from '../context/cart.jsx'
Context
import ToolCart from './Cart.jsx'
import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DumyData from "../../../../DumyData.json"

import { BsCart } from 'react-icons/bs';
// import  Tools  from '../../../assets/data/Tools.js';

export default function Products() {
  const [showModal, setshowModal] = useState(false);
  const [ToolProducts, setProducts] = useState([])
  const { cartItems, addToCart , removeFromCart} = useContext( Context )

  const toggleA = () => {
    setshowModal(!showModal);
  };

  // async function getProducts() {
  //   const response = await fetch('https://dummyjson.com/products')
  //   const data = await response.json()
  //   setProducts(data.products)
  // }

async function getProducts(){
 console.log(DumyData)
 setProducts(DumyData.ToolProducts)
}

  useEffect(() => {
    getProducts()
  }, [])

 

    const handleRemoveFromCart = (product) => {
      removeFromCart(product);
      // notifyRemovedFromCart(product);
    };

  return (
    <div className='flex flex-col justify-center bg-gray-100'>
      <ToastContainer />
      <div className='flex justify-between items-center px-20 py-5'>
        <h1 className='text-2xl uppercase font-bold mt-10 text-center mb-10'>New Featured Tools Kits</h1>
        {!showModal &&<button className='px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700'
          onClick={toggleA}
        ><BsCart/> ({cartItems.length})</button>}
      </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10'>
        {
          ToolProducts.map(product => (
            <div key={product.id} className='bg-white shadow-md rounded-lg px-2 py-8'>
              <img src={product.thumbnail} alt={product.title} className='rounded-md h-48 w-58' />
              <div className='mt-4'>
                <h1 className='text-lg uppercase font-bold'>{product.title}</h1>
                <p className='mt-2 text-gray-600 text-sm'>{product.description.slice(0, 100)}...</p>
                <p className='mt-2 text-green-600'>${product.price}</p>
              </div>
              <div className='mt-6 flex justify-between items-center'>
                {
                  !cartItems.find(item => item.id === product.id) ? (
                    <button className='px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700'
                      onClick={() => {
                        addToCart(product)
                        // notifyAddedToCart(product)
                      }
                      }
                      >
                        Add to cart
                      </button>
                  ) : (
                    <div className="flex gap-4">
                    <button
                      className="bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                      onClick={() => {
                        addToCart(product)
                      }}
                    >
                      +
                    </button>
                   <b> <p className='text-gray-700'>{cartItems.find(item => item.id === product.id).quantity}</p></b>
                    <button
                      className="bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                      onClick={() => {
                        const cartItem = cartItems.find((item) => item.id === product.id);
                        if (cartItem.quantity === 1) {
                          handleRemoveFromCart(product);
                        } else {
                          removeFromCart(product);
                        }
                      }}
                    >
                      -
                    </button>
                  </div>
                  )
                }
              </div>
            </div>
          ))
        }
      </div>
      <ToolCart showModal={showModal} toggle={toggleA} />
    </div>
  )
}
