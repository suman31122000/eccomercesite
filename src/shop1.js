
import React from "react";
import Image from "./image"
import Shopimage from "./shopimage";
function Shop1(){
   const box=[
        {
            title:'Hat',
            price:200,
            imageurl:'https://t3.ftcdn.net/jpg/02/75/74/58/360_F_275745846_slBI2EsTudIShef6hMliS6Oa123tC9Zv.jpg',
            id:'1'
        },
        {
            title:'Hat',
            price:200,
            imageurl:'https://www.shutterstock.com/image-photo/bamboo-hat-white-background-260nw-766363204.jpg',
            id:'2'
        },
        {
            title:'Hat',
            price:200,
            imageurl:'https://assets.ajio.com/medias/sys_master/root/20211013/NiBc/6166262baeb26901108e767c/puma__men_poly_cotton_cap_ind.jpg',
            id:'3'
        },
        {
            title:'Hat',
            price:200,
            imageurl:'https://t3.ftcdn.net/jpg/02/75/74/58/360_F_275745846_slBI2EsTudIShef6hMliS6Oa123tC9Zv.jpg',
            id:'4'
        },
        {
            title:'Hat',
            price:200,
            imageurl:'https://static3.depositphotos.com/1000388/110/i/450/depositphotos_1108058-stock-photo-luxury-women-red-hat.jpg',
            id:'5'
        },
        {
            title:'Hat',
            price:200,
            imageurl:'https://cdn.shopify.com/s/files/1/2273/0603/products/SF781-_1_grande.jpg?v=1638858658',
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
                    <Shopimage key={id} price={price} url={imageurl}/>
                ))}
        </div>
        </div>
    )
}

export default Shop1;