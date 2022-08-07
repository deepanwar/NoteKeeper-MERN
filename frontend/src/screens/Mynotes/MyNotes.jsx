import React from 'react'
import { Link } from 'react-router-dom'

import { Button } from 'react-bootstrap'
import Common from '../../components/Common'
import notes from '../../Data/notes'
import Note from '../../components/Note'

const MyNotes = () => {

    const handleDeleteNote = (id) => {
        console.log(id)
    }


    return (
        <div>
            <Common
                title="Welcome Deepak bhai..." >
                <Link to='createnote'>
                    <Button style={{
                        marginLeft: '10px',
                        margiinBottom: '6px'
                    }} size="lg">
                        Create New Note
                    </Button>
                </Link>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))',
                    gridGap: '10px',
                    marginTop: '10px',
                }}>

                    {
                        notes.map((note, index) => {
                            return (
                                <Note
                                    id={note._id}
                                    text={note.title}
                                    key={index}
                                    content={note.content}
                                    date={note.date}
                                    handleDeleteNote={handleDeleteNote}
                                />
                            )
                        })
                    }
                </div>
            </Common>
        </div>
    )
}

export default MyNotes