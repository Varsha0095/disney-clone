// import React from "react";
import disney from './../assets/images/disney.png';
import marvel from './../assets/images/marvel.png';
import nationalG from './../assets/images/nationalG.png';
import pixar from './../assets/images/pixar.png';
import starwar from './../assets/images/starwar.png';

import disneyV from './../assets/videos/disneyV.mp4';
import marvelV from './../assets/videos/marvelV.mp4';
import nationalGV from './../assets/videos/nationalGV.mp4';
import pixarV from './../assets/videos/pixarV.mp4';
import starWarsV from './../assets/videos/starWarsV.mp4';

function ProductionHouse() {
    const ProductionHouseList = [
        {
            id:1,
            image:disney,
            video:disneyV
        },
        {
            id:2,
            image:pixar,
            video:pixarV
        },
        {
            id:3,
            image:marvel,
            video:marvelV
        },
        {
            id:4,
            image:nationalG,
            video:nationalGV
        },
        {
            id:5,
            image:starwar,
            video:starWarsV
        }
    ]
    return(
        <div className="flex gap-2 md:gap-5 p-2 px-5 md:px-16">
            {ProductionHouseList.map((item) => (
                <div key={item.id} className="border-[2px] border-gray-600 
                rounded-lg hover:scale-110 transition-all duration-300
                ease-in-out cursor-pointer relative shadow-xl shadow-gray-700">
                    <video key={item.id} src={item.video} autoPlay loop playsInline muted
                    className="absolute top-0 rounded-md z-0 opacity-0
                    hover:opacity-70"/>
                    <img src={item.image} key={item.id} className="w-full z-[1]" />
                </div>
            ))}
        </div>
    )
}

export default ProductionHouse