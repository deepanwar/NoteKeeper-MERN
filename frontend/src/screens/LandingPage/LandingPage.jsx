import React from 'react'
import './LandindPage.css'

import { Button, Container, Row } from 'react-bootstrap'

const LandingPage = () => {
    return (
        <div className='main'>
<Container>
    <Row>
        <div className='intro-text'>
            <div>
                <h1 className='title'>Welcome to Note Keeper</h1>
                <p className='sub_title'>Keep your Notes here It's Free...</p>
            </div>
            <div className='buttonContainer'>
                <a href="/login">
                    <Button size="lg" className='landingButton'>
                        Log In
                    </Button>
                </a>
                <a href="/register">
                    <Button size="lg" className='landingButton' variant="outline-primary">
                        Sign Up
                    </Button>
                </a>
            </div>
        </div>
    </Row>

</Container>
        </div>
    )
}

export default LandingPage