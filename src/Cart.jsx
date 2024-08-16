import React from 'react'

const Cart = ({ cart, DeleteCart,total }) => {
  let Price = total().toFixed(2);
  return (
    
      
      
    <>
                  <h1 className='text-3xl font-sans font-bold italic md:text-5xl '>TOTAL PRICE : ${Price}</h1>

    <div className='w-full h-full flex flex-wrap'>

      
    
      {
        
              cart.map((dame ,k) => ( 
                <div key={k} className='w-full sm:w-1/2 justify-center md:w-1/3 lg:w-1/4 p-10 transition duration-500 ease-in-out transform scale-75 hover:fill-white hover:scale-90 border border-gray-900 mt-11 sm:justify-center flex'> 
                  <div>
                  <h2 className='text-3xl font-sans font-bold italic'>{dame.category}</h2>
                  <h1 className='font-bold text-red-500 text-3xl text-center m-3	'>${dame.price}</h1>
                      <img src={dame.image} alt="" width={200} />
                      <button  className='bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 rounded transition duration-300 ease-in-out transform hover:scale-105 m-11'
                    onClick={() => DeleteCart(k)}>Delete</button>
                  
                  </div>
          </div>
           
                
          ))
          
        
      } 

</div>
      </>
  )
}

export default Cart
