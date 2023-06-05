
import React from "react";
import Shopimage from "./shopimage";
function Shop2(){
   const box=[
        {
            title:"jacket",
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
        }
    ]
    return(
        <div>
           <div className="flex mx-5">
            <p className="flex-1 mt-5 ml-20 text-xl">{box[0].title} for boys and girls: {box.length} items</p>
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
                    <Shopimage key={id} price={price} url={imageurl} />
                ))}
        </div>
        </div>
    )
}

export default Shop2;