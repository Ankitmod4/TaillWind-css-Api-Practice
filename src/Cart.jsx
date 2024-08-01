import React from 'react'

const Cart = ({cart,DeleteCart}) => {
  return (
    <div className='w-full h-full flex flex-wrap'> 
       {
              cart.map((dame ,k) => ( 
                  <div key={k} className='w-full sm:w-1/2  md:w-1/3 p-2 lg:w-1/4'> 
                      <img src={dame.image} alt="" width={200} />
                      <button  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105'
 onClick={()=>DeleteCart(k)}>Delete</button>
                  </div>
              ))
          }
    </div>
  )
}

export default Cart
