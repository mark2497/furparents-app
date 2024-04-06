import React, { useEffect } from 'react';
import Button from '@/Components/Button';
import Authenticated from '@/Layouts/Authenticated';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, useForm } from '@inertiajs/inertia-react';
import Card from '@/Components/Card';
import { isEmpty } from 'lodash';

export default function AccountDetails(props) {
    const { data, setData, post, processing, errors, reset } = useForm();

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        if(isEmpty(data.name) || isEmpty(data.email) || processing) {
            return
        }

        e.preventDefault();

        post(route('account.update'));
    };

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">List of Dogs</h2>}
        >
            <Head title="Account Details" />

            <ValidationErrors errors={errors} className="w-full mt-6"/>
            <div className='flex align-middle justify-center mt-12'>
                <Card  className='w-1/3 bg-white'>
                    <h3 className='text-center'>Account Details</h3>
                    <form method='post'>
                        <div className='mt-4'>
                            <Label forInput="name" value="Name" />

                            <Input
                                type="text"
                                name="name"
                                value={data.name}
                                className="mt-1 block w-full"
                                autoComplete="name"
                                handleChange={onHandleChange}
                            />
                        </div>

                        <div className='mt-4'>
                            <Label forInput="email" value="Email" />

                            <Input
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                handleChange={onHandleChange}
                            />
                        </div>

                        <div className="flex items-center justify-end mt-4">
                            <Button type="button" onClick={submit} className="ml-4" disabled={processing || isEmpty(data.name) || isEmpty(data.email)}>
                                Save Changes
                            </Button>
                        </div>
                    </form>
                </Card>
            </div>
        </Authenticated>
    );
}
