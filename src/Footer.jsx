import React from 'react';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {

    const date = new Date().getFullYear();

    return <>
        <div className='footer'>

            <h2> copyright <CopyrightIcon /> {date}</h2>
        </div>
    </>
}

export default Footer;
