

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = ({addToCart}) => {
  const [data, setData] = useState([]);
  // const removeItem = (id) => {
  //   dispatch({ type: "REMOVE_ITEM", id });
  // };

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(`https://fakestoreapi.com/products`, {
          method: "GET"
        });
        const value = await response.json();
        setData(value);
      } catch (err) {
        console.log("Error", err);
      }
    }
    getData();
  }, []);
  const handleAddToCart = (product) => {
    addToCart(product);
  };
  const handleClick = (title) => {
    
    console.log(title);
  };

  return (
    <div>
      <section className='py-14 px-20'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
            {data.map((product) => (
              <div key={product.id}>
                <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
                  <div className='w-[170px] mx-auto flex justify-center items-center'>
                    <img
                      src={product.image}
                      className='max-h-[140px] mt-16 flex justify-center items-center group-hover:scale-110 transition duration-300'
                    />
                  </div>
                
                  <div className='absolute top-0 right-0 bg-orange-600 p-2 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100'>
                    <Link to="/mycart">
                      {/* <button>
                        Add to Cart
                      </button> */}
                        < button className="bg-orange-600"onClick={() => handleAddToCart(product)} >
                Add to Cart
              </button>
                    </Link>
                  </div>
                </div>
                <div>
                  <div>{product.category}</div>
                  <h2 className='font-bold mb-1'>
                    <Link to={`/description`} onClick={() => handleClick(product.title)}>
                      {product.title}
                    </Link>
                  </h2>
                  <div>{product.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
