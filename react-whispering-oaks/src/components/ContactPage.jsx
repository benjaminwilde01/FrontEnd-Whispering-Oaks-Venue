// import React, {useState, useEffect} from 'react'
import React, { Component } from 'react'
import axios from 'axios'
import { LinkContainer } from 'react-router-bootstrap'
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'

let url = 'http://localhost:5000/api/v1/whispering_oaks/'
let baseUrl = 'http://localhost:5000'

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
            <div>
                <LinkContainer to="/">
                    <Button variant="primary">Home</Button>
                </LinkContainer>
                <Form onSubmit={ this.submitHandler }>
                    <Form.Group controlId="formBasicText">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" name="name" value={ name } onChange={ this.changeHandler }/>
                    </Form.Group>

                    <Form.Group controlId="formBasicNumber">
                        <Form.Label>Number</Form.Label>
                        <Form.Control type="number" placeholder="Enter Number" name="number" value={ number } onChange={ this.changeHandler }/>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" value={ email } onChange={ this.changeHandler }/>
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control type="textarea" placeholder="Message" name="message" value={ message } onChange={ this.changeHandler }/>
                    </Form.Group>
                
                    <Button variant="primary" type="submit">
                     Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default ContactPage

// const ContactPage = () => {
//     const [initialData, setInitialData] = useState([{}])

//     useEffect(() => {
//         fetch(baseUrl).then(
//             res => res.json
//         ).then(data => console.log(data))
//     })


//     return (
//         <div>
//             <LinkContainer to="/">
//                 <Button variant="primary">Home</Button>
//             </LinkContainer>
//             <Form>
//                 <Form.Group controlId="formBasicName">
//                     <Form.Label>Name</Form.Label>
//                     <Form.Control type="text" placeholder="Enter name" />
//                 </Form.Group>

//                 <Form.Group controlId="formBasicNumber">
//                     <Form.Label>Name</Form.Label>
//                     <Form.Control type="text" placeholder="Enter name" />
//                 </Form.Group>

//                 <Form.Group controlId="formBasicEmail">
//                     <Form.Label>Email address</Form.Label>
//                     <Form.Control type="email" placeholder="Enter email" />
//                     <Form.Text className="text-muted">
//                     We'll never share your email with anyone else.
//                     </Form.Text>
//                 </Form.Group>

//                 <Form.Group controlId="formBasicMessage">
//                     <Form.Label>Message</Form.Label>
//                     <Form.Control type="textarea" placeholder="Password" />
//                 </Form.Group>
                
//                 <Button variant="primary" type="submit">
//                     Submit
//                 </Button>
//             </Form>

//         </div>
//     )
// }

// export default ContactPage
