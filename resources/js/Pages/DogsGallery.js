import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import {DogSelectionProvider, useSelection} from '@/context/useSelection';
import DogTiles from '@/Sections/DogsTiles';
import SelectionControls from '@/Sections/SelectionControls';

export default function DogsGallery(props) {
    
    useSelection();
    
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">List of Dogs</h2>}
        >
            <Head title="Dogs Gallery" />
            <p className='text-center text-green-500'>{props.status}</p>
            <DogSelectionProvider>
                <div className="py-12 relative">
                    <div className='absolute top-2 right-[4%]'>
                        <SelectionControls/>
                    </div>
                    <DogTiles></DogTiles>
                </div>
            </DogSelectionProvider>
        </Authenticated>
    );
}
