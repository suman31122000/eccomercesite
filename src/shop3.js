
import React from "react";
import Image from "./image"
import Shopingimage from "./shopimage";
function Shop2(){
   const box=[
        {
            title:'shoe',
            price:2000,
            imageurl:'https://5.imimg.com/data5/SELLER/Default/2022/9/GL/QH/OE/38630640/black-formal-shoes-500x500.jpg',
            id:13
        },
        {
            
            price:2000,
            imageurl:'https://m.media-amazon.com/images/I/512myFTqg0L._AC_UY300_.jpg',
            id:14
        },
        {
 
            price:2000,
            imageurl:'https://varito.in/wp-content/uploads/2023/04/Varito-Mens-Perfect-Stylish-Crust-Italian-Leather-Lace-up-Formal-Shoe-TAN-3-300x300.jpg',
            id:15
        },
        {
     
            price:2000,
            imageurl:'https://m.media-amazon.com/images/I/61A+bla9uJL._AC_UY300_.jpg',
            id:16
        },
        {
            price:2000,
            imageurl:'https://cdn.shopify.com/s/files/1/0619/5019/7957/products/801A1710copy_300x.jpg?v=1678515771',
            id:17
        },
        {
           
            price:2000,
            imageurl:'https://cdn.shopify.com/s/files/1/0590/7211/8979/files/natural_3_bfb7c26d-7d69-4bf0-a5a4-9763dd4218c8_480x480.jpg?v=1648539285',
            id:18
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