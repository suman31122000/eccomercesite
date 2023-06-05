import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Image from './image';

function Home() {
  const box = [
    {
      title: 'Hat',
      imageurl: 'https://www.shutterstock.com/image-photo/stylish-man-elegant-black-suit-260nw-144080746.jpg',
      id: '1'
    },
    {
      title: 'Jacket',
      imageurl: 'https://imageio.forbes.com/specials-images/imageserve/621907c6a1c1d351180dadb8/Buck-Mason-Dry-Waxed-Canvas-N1-Deck-Jacket-10/960x0.jpg?format=jpg&width=960',
      id: '2'
    },
    {
      title: 'Shoes',
      imageurl: 'https://media.istockphoto.com/id/1292261872/photo/young-man-shopping-shoes.jpg?b=1&s=170667a&w=0&k=20&c=29XJZtu9Q7pkQ1uH9drj4iEw34bzARzqJbI4VOCpDKE=',
      id: '3'
    }
  ];
  const navigate=useNavigate();
  function handleclick(){
    navigate("/shop")
  }

  return (
    <div>
      <div
        style={{ backgroundImage: 'url(https://media.istockphoto.com/id/658909998/photo/jacket-dude.jpg?s=612x612&w=0&k=20&c=TlVOCoC0qCh--Gi0q0CWxIwmUZQIgNFQOlYR-CAa6qo=)' }}
        className="h-96 flex flex-col justify-centre items-center"
      >
        <div className="flex-1 flex flex-col items-center justify-center">
          <p className="text-8xl text-slate-100">LEATHER BAGS</p>
          <p className="text-xl text-slate-300">new collection 2023</p>
          <button onClick={handleclick} className="mt-12 px-3 py-2 bg-slate-200 text-slate rounded-xl shadow-lg shadow-slate-300/50 text-sm font-semibold hover:shadow-slate-500/80 hover:bg-slate-300 hover:text-slate-50">shop now</button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-5 ml-12">
        {box.map((item) => (
          <Image key={item.id} id={item.id} title={item.title} url={item.imageurl} />
        ))}
      </div>
    </div>
  );
}

export default Home;
