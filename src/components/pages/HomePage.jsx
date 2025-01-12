import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [items, setItems] = useState([]); // Start with an empty array for items

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => {
        console.log(res.data);
        setItems(res.data); 
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className='w-full bg-blue-400 h-full'>
       <div className=''>       
      {items.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.title} width="100" />
          <p>${item.price}</p>       
          <p>{item.description}</p>
        </div>
      ))}
       </div>
    </div>
  );
};

export default HomePage;
