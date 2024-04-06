import React from "react";

export default function Card({className, children}) {
    return (
        <div className={"max-w-sm rounded overflow-hidden shadow-lg px-6 py-4 w-60 " + className}>
            {children}
            {/* <img class="w-full" src={image_src} alt={alt_name}/>
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{name}</div>
                <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div> */}
        </div>
    )
}