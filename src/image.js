import React from 'react';
import { useNavigate, BrowserRouter, Routes, Route } from 'react-router-dom';

const Image = ({ id, title, url }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/shop${id}`);
  };

  return (
    <div
      type="button"
      onClick={handleClick}
      className="duration-0.1 flex h-60 w-96 transform flex-wrap transition-transform hover:scale-110 hover:cursor-pointer"
      style={{ backgroundImage: `url(${url})` }}
    >
      <div className="flex flex-1 flex-col flex-wrap items-center justify-center">
        <div className="shadow-4xl flex h-20 w-40 flex-col items-center justify-center bg-slate-200 bg-opacity-50">
          <h1 className="text-xl">{title}</h1>
          <span>Shop Now </span>
        </div>
      </div>
    </div>
  );
};

export default Image;
