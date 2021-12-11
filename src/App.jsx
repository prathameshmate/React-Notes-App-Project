import React, { useState } from 'react';
import Heading from "./Heading";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Notes from "./Notes";

const App = () => {
    const [addItem, updateItem] = useState([]);

    const addNotes = (notes) => {
        updateItem((prevalue) => {
            return [...prevalue, notes];
        })
    }

    const deleteNotes = (id) => {
        updateItem(() => {
            return (
                addItem.filter((currValue, index) => {
                    return (id !== index);
                })
            );

        })
    }

    return <>
        <Heading />

        <CreateNote
            passNotes={addNotes}
        />

        <div className='container'>

            {
                addItem.map((currValue, index) => {
                    return (
                        <Notes
                            key={index}
                            id={index}
                            title={currValue.title}
                            content={currValue.content}
                            delete={deleteNotes}
                        />
                    )
                })
            }

        </div>

        <Footer />
    </>
}

export default App;
