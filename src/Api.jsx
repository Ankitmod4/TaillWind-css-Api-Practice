import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react';
const Api = () => {
    const [data, setdata] = useState([])
    const [cart, setcart] = useState([]);
    const ApiCall = async () => {
       
        try {
          const res=  await axios.get('https://fakestoreapi.com/products');
            console.log(res.data);
            setdata(res.data);
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        ApiCall();
    }, [])
    const AddtoCart = (products) => {

        setcart([...cart, products]);
        console.log(cart);
    }
    const DeleteCart = (k) => {
        const filters = cart.filter((prev, id) => {
            return k != id;
        })
        setcart(filters);
        
    }
  return (  
    <div className='flex flex-wrap w-auto h-h-auto  '>
          {
              data.map((products, i) => (
                  <div key={i} className='w-full sm:w-1/2 justify-center md:w-1/3 p-2 lg:w-1/4 ' >
                      <h1 >{products.id }</h1>
                      <h2>{products.category}</h2>
                      <h1>{products.price }</h1>
                      <img src={products.image} alt="" width={200} />
                      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105'
 onClick={()=>AddtoCart(products)}>Add to Cart</button>
                  </div>
              ))
          }
          <section style={{ border: '50px solid black' }} className='w-full text-center'> CART SECTION</section>
          
          {
              cart.map((dame ,k) => ( 
                  <div key={k}>
                      <img src={dame.image} alt="" width={200} />
                      <button  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105'
 onClick={()=>DeleteCart(k)}>Delete</button>
                  </div>
              ))
          }
    </div>
  )
}

export default Api
