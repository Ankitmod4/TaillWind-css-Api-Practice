import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react';
import Cart from './Cart';
import { Link } from 'react-router-dom';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
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
        <BrowserRouter>
            <div className='flex flex-wrap w-auto h-auto '>
                <div className='flex  h-full w-full justify-between bg-slate-800 '>
            <Link to="/cart" className='block text-center mt-4 m-6 '>
                            <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 '>
                                Go to Cart
                            </button>
                        </Link>
            <Link to="/" className='block text-center mt-4 m-6 '>
                            <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105'>
                               Go To Home
                            </button>
                    </Link>
                    </div>
            <Routes>
                <Route path="/" element={
                    <>
                        {data.map((product, i) => (
                            <div key={i} className='w-full sm:w-1/2 justify-center md:w-1/3 lg:w-1/4 p-10 transition duration-500 ease-in-out transform scale-75 hover:fill-white hover:scale-90 border border-gray-900' >
                                <h2 className='text-3xl font-sans font-bold italic	'>{product.category}</h2>
                                <h1 className='font-bold text-red-500 text-3xl text-center m-3	'>${product.price}</h1>
                                <img src={product.image} alt="" width={200} className='h-60'  />
                                <button
                                    className='bg-blue-500 hover:bg-blue-700 m-10 text-white font-bold p-3 rounded transition duration-300 ease-in-out transform hover:scale-105  '
                                    onClick={() => AddtoCart(product)}
                                > 
                                    Add to Cart 
                                </button>
                            </div>
                        ))} 
                        
                    </>
                } /> 
                <Route path="/cart" element={<Cart cart={cart} DeleteCart={DeleteCart} />} />
            </Routes>
        </div>
    </BrowserRouter>
  )
}

export default Api



  