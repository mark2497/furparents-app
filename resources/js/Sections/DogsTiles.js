import React from "react";

import Card from "@/Components/Card";
import { useSelection } from "@/context/useSelection";
import Checkbox from "@/Components/Checkbox";

export default function DogTiles() {
    const { breedImages, selected, handleChangesOnSelect } = useSelection();
    return (
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg py-10">
                <div className='flex flex-wrap justify-center align-middle gap-4'>
                    {
                        Object.keys(breedImages).map((breed) => (
                            <Card key={breed} className="relative">
                                <Checkbox className="absolute top-2 right-2" name={breed} value={breed} checked={selected[breed] != undefined} handleChange={() => handleChangesOnSelect(breed, breedImages[breed])}/>
                                <img src={breedImages[breed]}/>
                                <p className="text-center">{breed}</p>
                            </Card>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}