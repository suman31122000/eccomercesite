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
      className="flex h-60 w-96 hover:cursor-pointer transition-transform duration-0.1 transform hover:scale-110"
      style={{ backgroundImage: `url(${url})` }}
    >
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="bg-slate-200 bg-opacity-50 h-20 w-40 flex flex-col justify-center items-center">
          <h1 className="text-xl">{title}</h1>
          <span>Shop Now </span>
        </div>
      </div>
    </div>
  );
};

export default Image;
