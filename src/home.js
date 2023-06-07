import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Image from './image';

function Home() {
  const box = [
    {
      title: 'Hat',
      imageurl:
        'https://www.shutterstock.com/image-photo/stylish-man-elegant-black-suit-260nw-144080746.jpg',
      id: '1',
    },
    {
      title: 'Jacket',
      imageurl:
        'https://i.pinimg.com/564x/bd/15/a9/bd15a957cb6019070e78411ab2f79d46.jpg',
      id: '2',
    },
    {
      title: 'Shoes',
      imageurl:
        'https://media.istockphoto.com/id/1292261872/photo/young-man-shopping-shoes.jpg?b=1&s=170667a&w=0&k=20&c=29XJZtu9Q7pkQ1uH9drj4iEw34bzARzqJbI4VOCpDKE=',
      id: '3',
    },
  ];
  const navigate = useNavigate();
  function handleclick() {
    navigate('/shop');
  }

  return (
    <div>
      <div
        style={{
          backgroundImage:
            'url(https://media.istockphoto.com/id/658909998/photo/jacket-dude.jpg?s=612x612&w=0&k=20&c=TlVOCoC0qCh--Gi0q0CWxIwmUZQIgNFQOlYR-CAa6qo=)',
        }}
        className="justify-centre flex h-96 flex-col flex-wrap items-center"
      >
        <div className="flex flex-1 flex-col items-center justify-center">
          <p className="text-8xl text-slate-100">LEATHER BAGS</p>
          <p className="text-xl text-slate-300">new collection 2023</p>
          <button
            onClick={handleclick}
            className="text-slate mt-12 rounded-xl bg-slate-200 px-3 py-2 text-sm font-semibold shadow-lg shadow-slate-300/50 hover:bg-slate-300 hover:text-slate-50 hover:shadow-slate-500/80"
          >
            shop now
          </button>
        </div>
      </div>
      <div className="ml-12 mt-5 flex grid grid-cols-3 flex-col flex-wrap gap-4">
        {box.map((item) => (
          <Image
            key={item.id}
            id={item.id}
            title={item.title}
            url={item.imageurl}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
