
import React from "react";
import Shopingimage from "./shopimage";
function Shop2(){
   const box=[
        {
            title:"jacket",
            price:400,
            imageurl:'https://i.pinimg.com/564x/bd/15/a9/bd15a957cb6019070e78411ab2f79d46.jpg',
            id:7
        },
        {
            price:400,
            imageurl:'https://static.dezeen.com/uploads/2018/02/ministry-of-supply-kickstarter-heated-jacket-design-technology_dezeen_2364_sq-3-300x300.jpg',
            id:8
        },
        {
            price:400,
            imageurl:'https://cdn.shopify.com/s/files/1/0365/6204/3018/products/p91_grande.jpg?v=1617357809',
            id:9
        },
        {
            price:400,
            imageurl:'https://m.media-amazon.com/images/S/aplus-media-library-service-media/ef4c15f4-4d62-4d1f-acfe-6f8ffc7070fd.__CR0,43,1158,1158_PT0_SX300_V1___.png',
            id:10
        },
        {
            price:400,
            imageurl:'https://www.zeusmotorcyclegear.com/wp-content/uploads/2021/07/Raptor5-Red-Riding-Jacket-300x300.png',
            id:11
        },
        {
            price:400,
            imageurl:'https://cdn.shopify.com/s/files/1/0250/9275/1413/products/Untitled-12_300x.jpg?v=1637372417',
            id:12
        }
    ]
    return(
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
    )
}

export default Shop2;