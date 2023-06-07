import React from 'react';
import Shopingimage from './shopimage';
// import storeitems from './items.json'

function Shop1() {
  const box = [
    {
        title:'Hat',
        price:200,
        imageurl:'https://t3.ftcdn.net/jpg/02/75/74/58/360_F_275745846_slBI2EsTudIShef6hMliS6Oa123tC9Zv.jpg',
        id:1},
    {
        title:'Hat',
        price:200,
        imageurl:'https://www.shutterstock.com/image-photo/bamboo-hat-white-background-260nw-766363204.jpg',
        id:2
    },
    {
        title:'Hat',
        price:200,
        imageurl:'https://assets.ajio.com/medias/sys_master/root/20211013/NiBc/6166262baeb26901108e767c/puma__men_poly_cotton_cap_ind.jpg',
        id:3
    },
    {
        title:'Hat',
        price:200,
        imageurl:'https://cdn.shopify.com/s/files/1/2081/9771/files/WHC_Landing_Page_Company_on_a_Mission_-_Image_1_300x.jpg?v=1664900215',
        id:4
    },
    {
        title:'Hat',
        price:200,
        imageurl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPIwOw9ttcdbZpruy2Sfk8edUMf25OID-Whw&usqp=CAU',
        id:5
    },
    {
        title:'Hat',
        price:200,
        imageurl:'https://i.pinimg.com/474x/45/a1/24/45a124aa89dd16f69c631f4b88b40c09.jpg',
        id:6
    }
  ];
  // const {title,price,imageurl,id}=storeitems
  return (
    <div>
      <div className="mx-5 flex flex-wrap">
        <p className="ml-20 mt-5 flex flex-1 text-xl shadow-xl items-center p-3">
          {box[0].title} for boys and girls: {box.length} items
        </p>
        <div className="mr-12 mt-5 flex flex-wrap justify-end rounded-sm border-2 ">
          <p className="flex justify-center items-center font-semibold">Sort By:</p>
          <select>
            <option value={'default'}>Recommended</option>
            <option value={'lh'}>Price: Low to High</option>
            <option value={'hl'}>Price: High to Low</option>
          </select>
        </div>
      </div>
      <div className="ml-12 mt-5 flex flex-wrap justify-evenly">
        {box.map(({id, price, imageurl,title }) => (
          <Shopingimage id={id} price={price} url={imageurl} />
        ))}
      </div>
    </div>
  );
}

export default Shop1;
