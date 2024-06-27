import PropTypes from 'prop-types'
import { useContext } from 'react'
import { Context } from '../context/cart.jsx'
import { ToastContainer, } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function ToolCart ({showModal, toggle}) {

  const { cartItems, clearCart, getCartTotal } = useContext(Context)

  // const notifyRemovedFromCart = (item) => toast.error(`${item.title} removed from cart!`, {
  //   position: 'top-center',
  //   autoClose: 2000,
  //   hideProgressBar: true,
  //   closeOnClick: true,
  //   // pauseOnHover: true,
  //   draggable: true,
  //   theme: 'colored',
  //   style: {
  //     backgroundColor: '#000',
  //     color: '#fff'
  //   }
  // })

  // const notifyCartCleared = () => toast.error(`Cart cleared!`, {
  //   position: 'top-center',
  //   autoClose: 2000,
  //   hideProgressBar: true,
  //   closeOnClick: true,
  //   // pauseOnHover: true,
  //   draggable: true,
  //   theme: 'colored',
  //   style: {
  //     backgroundColor: '#000',
  //     color: '#fff'
  //   }
  // })

  // const handleRemoveFromCart = (product) => {
  //   removeFromCart(product)
  //   notifyRemovedFromCart(product)
  // }




  return (
    showModal && (
      <div className="flex-col flex overflow-scroll items-center fixed  left-1/4 bg-white dark:bg-black gap-8  p-10  text-black dark:text-white font-normal uppercase text-sm">
        <ToastContainer />
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="absolute">
          <button
            className="button bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            onClick={toggle}
          >
            Close
          </button>
        </div>
        <div className="container" >
          {cartItems.map((item) => (
            <div className="flex justify-between items-center" key={item.id}>
             
              <div className="n">
                <div className="left">
                <img src={item.thumbnail} alt={item.title} className="rounded-md w-28 h-24" /></div>
                <div className=" left">
                  <h1 className=" font-bold">{item.title}</h1>
                  <p className=' text-gray-600 '>{item.description}</p>
                  <p className="text-green-600">${item.price}</p>
                </div>
              
              </div>
              
              {/* <div className="flex text-center ">
                <button
                  className=" py-2  bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                  onClick={() => {
                    addToCart(item)
                  }}
                >
                  +
                </button>
                <b><p>{item.quantity}</p></b>
                <button
                  className="py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                  onClick={() => {
                    const cartItem = cartItems.find((product) => product.id === item.id);
                    if (cartItem.quantity === 1) {
                      handleRemoveFromCart(item);
                    } else {
                      removeFromCart(item);
                    }
                  }}
                >
                  -
                </button>
              </div> */}
              </div>
           
           
          ))}
        </div>
        {
          cartItems.length > 0 ? (
            <div className="flex flex-col justify-between items-center">
          <h1 className="text-lg font-bold">Total: ${getCartTotal()}</h1>
          <button
            className="btn px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            onClick={() => {
              clearCart()
              // notifyCartCleared()
            }}
          >
            Clear cart
          </button>
        </div>
          ) : (
            <button
            className="button bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            onClick={toggle}
          >
            Close
          </button>
          )
        }
      </div>
    )
  )
}

ToolCart.propTypes = {
  showModal: PropTypes.bool,
  toggle: PropTypes.func
}

