import React from "react";
import Shopimage from "./shopimage";
function Shop(){
        const box=[
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
            },
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
            },
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
        <p className="ml-20 mt-5 flex-1 text-xl">
          {box[0].title} for boys and girls: {box.length} items
        </p>
        <div className="mr-12 mt-5 flex flex-wrap justify-end rounded-sm border-2 border-slate-900">
          <p className="flex">Sort By:</p>
          <select>
            <option value={'default'}>Recommended</option>
            <option value={'lh'}>Price: Low to High</option>
            <option value={'hl'}>Price: High to Low</option>
          </select>
        </div>
      </div>
      <div className="ml-12 mt-5 flex flex-wrap justify-evenly">
        {box.map(({ price, id, imageurl }) => (
          <Shopimage id={id} price={price} url={imageurl} />
        ))}
      </div>
    </div>
    )
}
export default Shop;