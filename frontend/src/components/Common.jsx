import React from 'react'
import './Common.css'
import { Container, Row } from 'react-bootstrap'

const Common = ({ title, children }) => {
    return (
        <div className='mainback'>
            <Container>
                <Row>
                    <div className='page '>
                        {title && (
                            <>
                                <h1 className='heading'>{title}</h1>
                                <hr />
                            </>
                        )}
                        {children}
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Common