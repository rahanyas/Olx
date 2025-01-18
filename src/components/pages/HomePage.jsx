import { useEffect, useState } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then((res) => {
        setItems(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);//re-render only when page change

  return (
    <div className=" min-h-screen p-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-md shadow-sm border hover:shadow-lg transition duration-200 cursor-pointer"
            >
              <img
                src={item.images[0]}
                alt={item.title}
                className="w-full h-48 object-cover rounded-t-md"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 text-sm truncate">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs truncate">
                  {item.description}
                </p>
                <p className="text-blue-600 font-bold mt-2">${item.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='flex justify-center mt-3'>
           <button className='border-2 border-black rounded p-2 font-semibold capitalize hover:border-[5px] transition-all ease-in duration-75 my-4'
          //  onClick={}
           >
            load more
           </button>
        </div>
      </div>
    </div>   
  );
};

export default HomePage;
