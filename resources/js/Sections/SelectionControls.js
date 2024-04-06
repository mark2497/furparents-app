import React, {useEffect} from 'react'
import Button from '@/Components/Button'
import { useForm } from '@inertiajs/inertia-react';
import { useSelection } from "@/context/useSelection";


export default function SelectionControls() {
    const { clear, selected } = useSelection();

    const {data, setData, post, processing} = useForm({...selected});

    const submitData = (e) => {
        e.preventDefault();
        post('/setPreferredBreed');
    }

    useEffect(() => {
        let breeds = Object.keys(selected)
        setData({payload: breeds});
    }, [selected]);

    return (
        <div className='flex flex-row gap-5 align-middle'>
            <Button type='button' className='bg-blue-500 text-white active:bg-blue-300 hover:bg-blue-300' disabled={processing && Object.keys(selected)} onClick={(e)=>submitData(e)}>Save</Button>
            <Button type='button' className='bg-transparent text-red-500 active:text-red-300 hover:text-red-300'  onClick={(e) => clear()}>Clear</Button>
        </div>
    )
}