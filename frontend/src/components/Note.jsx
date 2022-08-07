import React from 'react'
import "./Note.css"
function Note({ id, text, content, date, handleDeleteNote }) {


    return (
        <>
            <div 
            className="note-body"
            href="/note/id"
            >

                <span style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                }}>
                    {text}
                </span>

                <p style={{
                    fontStyle: "italic"
                }} >
                    {content}
                </p>

                <div className='date' >
                    <small>{date}</small>
                    <div
                        className='delete'
                        onClick={() => handleDeleteNote(id)}>
                        🗑️
                    </div>
                </div>
            </div>
        </>
    )
}

export default Note