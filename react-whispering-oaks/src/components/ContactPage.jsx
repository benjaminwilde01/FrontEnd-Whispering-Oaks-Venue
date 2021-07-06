import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'

const ContactPage = () => {
    return (
        <div>
            <LinkContainer to="/">
                <Button variant="primary">Home</Button>
            </LinkContainer>
            <Form>
                <Form.Group controlId="formBasicText">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicText">
                    <Form.Label>Message</Form.Label>
                    <Form.Control type="textarea" placeholder="Password" />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </div>
    )
}

export default ContactPage
