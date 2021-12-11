import React from 'react';
import Logo from "./logo/logo1.png"
import DescriptionIcon from '@mui/icons-material/Description';

const Heading = () => {
    return <>
        <div className=' header'>
             <DescriptionIcon className='logo'/>
            <div className='heading'>
                <h1 >PM Notes</h1>
            </div>
        </div>
    </>
}
export default Heading;