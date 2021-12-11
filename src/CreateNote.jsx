import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const CreateNote = (props) => {
    const [notes, updateNotes] = useState({
        title: ' ',
        content: ' '
    });

    const create = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        updateNotes((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        });
    }

    const addNotes = () => {
        props.passNotes(notes);

    }

    const [ans, updateAns] = useState(false);

    const show = () => {
        updateAns(true);
    }

    const hide = () => {
        updateAns(false);
    }
    return <>
        <div className='createNote' >
            <div onMouseOver={show} onMouseLeave={hide}  >
                
                {ans ?
                 <input type="text " name="title" placeholder='Title' onChange={create} /> : null}
                    
                <br />
                
                <textarea type="text" name="content" placeholder='Write your note......'  onChange={create} ></textarea>

                <br />

                {ans ?
                     <div className='spam'>
                        <Button className='btn1' onClick={addNotes} data-bs-toggle="tooltip" data-bs-placement="top" title="Add"> <AddCircleOutlineIcon /></Button>
                    </div>  : null}
                   
            </div>
        </div>
    </>
}

export default CreateNote;
