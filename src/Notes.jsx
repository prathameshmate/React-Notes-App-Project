import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

const Notes = (props) => {
   
    const deleteNotes = ()=>{
        props.delete(props.id);
    }

    return <>
    
        <div className='notes'>
            <div className='spam'>
                <Button className='btn2' onClick={deleteNotes} data-bs-toggle="tooltip" data-bs-placement="top" title="Delete" ><DeleteIcon /></Button>
            </div>
            <h5>{props.title}</h5>
            <p>{props.content}</p>
        </div>

    </>
}

export default Notes;
