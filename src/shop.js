import React from "react";
import Shopimage from "./shopimage";
function Shop(){
        const box=[
            {
                price:200,
                imageurl:'https://t3.ftcdn.net/jpg/02/75/74/58/360_F_275745846_slBI2EsTudIShef6hMliS6Oa123tC9Zv.jpg',
                id:'1'
            },
            {
                price:200,
                imageurl:'https://www.shutterstock.com/image-photo/bamboo-hat-white-background-260nw-766363204.jpg',
                id:'2'
            },
            {
                price:200,
                imageurl:'https://assets.ajio.com/medias/sys_master/root/20211013/NiBc/6166262baeb26901108e767c/puma__men_poly_cotton_cap_ind.jpg',
                id:'3'
            },
            {
                price:200,
                imageurl:'https://t3.ftcdn.net/jpg/02/75/74/58/360_F_275745846_slBI2EsTudIShef6hMliS6Oa123tC9Zv.jpg',
                id:'4'
            },
            {
                price:200,
                imageurl:'https://static3.depositphotos.com/1000388/110/i/450/depositphotos_1108058-stock-photo-luxury-women-red-hat.jpg',
                id:'5'
            },
            {
                price:200,
                imageurl:'https://cdn.shopify.com/s/files/1/2273/0603/products/SF781-_1_grande.jpg?v=1638858658',
                id:'6'
            },
            {
                price:400,
                imageurl:'https://www.redwolf.in/image/catalog/sweatshirts/goku-kanji-dragon-ball-z-baseball-jacket-india.jpg',
                id:'1'
            },
            {
                price:400,
                imageurl:'https://images.asos-media.com/products/topshop-denim-oversized-jacket-in-mid-blue/204619124-1-midblue?$n_480w$&wid=476&fit=constrain',
                id:'2'
            },
            {
                price:400,
                imageurl:'https://hips.hearstapps.com/esq.h-cdn.co/assets/16/08/980x980/square-1456186471-kanye-jacket-index.jpg?resize=1200:*',
                id:'3'
            },
            {
                price:400,
                imageurl:'https://st2.depositphotos.com/1637787/6885/i/600/depositphotos_68855971-stock-photo-happy-couple-enjoying-time-together.jpg',
                id:'4'
            },
            {
                price:400,
                imageurl:'https://media.istockphoto.com/id/533098559/photo/snow-kids.jpg?s=612x612&w=0&k=20&c=pl2MpKc3LtBafre3ak3oZPugqkFcZNyZEG_MXzIBx_Q=',
                id:'5'
            },
            {
                price:400,
                imageurl:'https://store.royalenfield.com/media/catalog/category/riding_jacket.jpg',
                id:'6'
            },
            {
                price:2000,
                imageurl:'https://cdn.shopclues.com/images1/thumbnails/113551/640/1/152139061-113551522-1668507816.jpg',
                id:'1'
            },
            {
                price:2000,
                imageurl:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
                id:'2'
            },
            {
                price:2000,
                imageurl:'https://cdn.shopify.com/s/files/1/0607/6678/1671/products/EVOK-5G-700-WHT_2.jpg?v=1670326642',
                id:'3'
            },
            {
                price:2000,
                imageurl:'https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg?cs=srgb&dl=pexels-pixabay-267301.jpg&fm=jpg',
                id:'4'
            },
            {
                price:2000,
                imageurl:'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fHww&w=1000&q=80',
                id:'5'
            },
            {
                price:2000,
                imageurl:'https://img.freepik.com/free-photo/brown-leather-shoes_1203-7562.jpg',
                id:'6'
            }
        ]
    return(
        <div>
        <div className="flex mx-5">
         <p className="flex-1 mt-5 ml-20 text-xl">items for boys and girls: {box.length} items</p>
         <div className="flex justify-end mr-12 mt-5 rounded-sm border-2 border-slate-900" >
         <p className="flex">sort By:</p>
         <select >
         <option value={"default"}>Recommended</option>
             <option value={"lh"}>price:low to high</option>
             <option value={"hl"}>price:high to low</option>
             </select>
         </div>
         </div> 
     <div className="grid grid-cols-3 gap-4 mt-5 ml-12">
         {box.map(({price,id,imageurl}) => (
                 <Shopimage key={id} price={price} url={imageurl}/>
             ))}
     </div>
     </div>
    )
}
export default Shop;