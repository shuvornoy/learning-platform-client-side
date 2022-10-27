import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Footer = () => {
    const foot = useLoaderData();
    return (
        <div>
            <h3>footer {foot}</h3>
        </div>
    );
};

export default Footer;