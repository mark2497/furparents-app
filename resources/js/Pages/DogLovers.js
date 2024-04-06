import React from "react";
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';

export default function DogLovers(props) {

    const getUsers = () => {

    }

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">FurParents</h2>}
        >
            <Head title="Furparents" />
                <div className="flex flex-col px-10 py-5">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div className="overflow-hidden"></div>
                                <table className="min-w-full text-center text-sm font-light">
                                    <thead
                                        className="border-b bg-neutral-50 font-medium dark:border-neutral-500 dark:text-neutral-800">
                                        <tr>
                                            <th scope="col" className=" px-6 py-4">Name</th>
                                            <th scope="col" className=" px-6 py-4">Email</th>
                                            <th scope="col" className=" px-6 py-4">Favorite Breeds</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* {JSON.stringify(props.furparents)} */}
                                        {
                                            props.furparents.map((item) => {
                                                return (
                                                    <tr key={item} className="border-b dark:border-neutral-500">
                                                        <td className="whitespace-nowrap  px-6 py-4 font-medium">{item.name}</td>
                                                        <td className="whitespace-nowrap  px-6 py-4">{item.email}</td>
                                                        <td className="whitespace-nowrap  px-6 py-4">{item.favorite_breeds}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
        </Authenticated>
    );
}