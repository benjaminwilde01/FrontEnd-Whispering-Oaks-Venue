
import React, { Component } from 'react'
import axios from 'axios'
import { LinkContainer } from 'react-router-bootstrap'
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import './contact.css'

// let url = 'http://localhost:5000/api/v1/whispering_oaks/'

let url = 'https://whispering-oaks.herokuapp.com'

// if (process.env.NODE_ENV === 'development') {
//   baseURL = 'http://localhost:5000/api/v1/whispering_oaks/';
// } else {
//   baseURL = 'https://whispering-oaks.herokuapp.com/';
// }

class ContactPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: '',
            number: 0,
            email: '',
            message: ''
        }
    }
    
    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post(url, this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { name, number, email, message } = this.state
        return (
            <div className="container d-flex">
                <LinkContainer className="d-flex home"  to="/">
                    <Button variant="primary">Home</Button>
                </LinkContainer>
                <Form className="d-flex flex-column form" onSubmit={ this.submitHandler }>
                    <Form.Group className="form-input" controlId="formBasicText">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" name="name" value={ name } onChange={ this.changeHandler }/>
                    </Form.Group>

                    <Form.Group className="form-input" controlId="formBasicNumber">
                        <Form.Label>Number</Form.Label>
                        <Form.Control type="number" placeholder="Enter Number" name="number" value={ number } onChange={ this.changeHandler }/>
                    </Form.Group>

                    <Form.Group className="form-input" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" value={ email } onChange={ this.changeHandler }/>
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="form-input" controlId="formBasicMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control type="textarea" placeholder="Message" name="message" value={ message } onChange={ this.changeHandler }/>
                    </Form.Group>
                
                    <Button className="submit" variant="primary" type="submit">
                     Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default ContactPage
