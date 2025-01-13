import { useEffect, useState } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-md shadow-sm border hover:shadow-lg transition duration-200 cursor-pointer"
            >
              <img
                src={item.image}
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
      </div>
    </div>
  );
};

export default HomePage;
