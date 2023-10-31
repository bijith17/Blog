import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="bg-gradient-to-r from-bgOne to-bgTwo min-h-screen p-8">
      <div className=" mx-4">
        <h1 className="text-4xl text-white font-bold mb-8">--My Blog--</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {posts.map((post) => (
            <div key={post.id} className="cursor-pointer rounded bg-white bg-opacity-40  p-4 shadow shadow-gray-500 transition duration-500 hover:scale-105">
              <h2 className="text-xl font-semibold text-custom-color">{post.title}</h2>
              <p className="text-gray-700">{post.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
