import React from 'react'
import { Card } from 'react-bootstrap'

const Footer = () => {
    return (
        <Card className="p-3">
            <blockquote className="blockquote mb-0 card-body">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                erat a ante.
            </p>
            <footer className="blockquote-footer">
                <small className="text-muted">
                Someone famous in <cite title="Source Title">Source Title</cite>
                </small>
            </footer>
            </blockquote>
        </Card>
    )
}

export default Footer
