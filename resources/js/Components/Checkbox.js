import React from 'react';

export default function Checkbox({ name, className, value, checked, handleChange }) {
    return (
        <input
            type="checkbox"
            name={name}
            value={value}
            checked={checked}
            className={"rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 " + className}
            onChange={(e) => handleChange(e)}
        />
    );
}
