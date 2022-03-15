import React from 'react';
import { debounce } from '../../Utils';
import './InputStyles.css';

export const Input = ({ onChange, placeholder, type }) => {
    const handleChange = (e) => {
        let searchTerm = e.target.value;
        debounce((searchTerm) => {
            onChange(searchTerm);
        }, 500)(searchTerm);
    };

    return (
        <div className="input-container">
            <input
                className="input"
                onKeyUp={handleChange}
                type={type}
                placeholder={placeholder}
                autoFocus
            />
        </div>
    );
};
