import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

const Description = () => {
  
  const [products, setProducts] = useState([]);
  // const {id}= useParams();

  useEffect(() => {
    async function getProductsData() {
      try {

        const response = await fetch(`https://fakestoreapi.com/products/`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log('Error:', error);
      }
    }

    getProductsData();
  }, []);

  if (products.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="py-14 px-20">
      <div className="container mx-auto">
        {products.map((product) => (
          <div key={product.id} className="max-w-md mx-auto bg-white shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
            <div className="mb-4">
              <img src={product.image} alt={product.title} className="w-full" />
            </div>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-gray-800 font-bold mb-2">Category: {product.category}</p>
            <p className="text-gray-800 font-bold">Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Description;

