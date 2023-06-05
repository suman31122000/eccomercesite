
import React from "react";
import Image from "./image"
import Shopimage from "./shopimage";
function Shop2(){
   const box=[
        {
            title:'shoe',
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

export default Shop2;