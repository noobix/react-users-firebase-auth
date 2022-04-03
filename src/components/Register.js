import React from 'react'
import {Button, Form} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import withRouter from '../withRouter'
import firebase from '../firebase/config'

class Register extends React.Component {
    constructor(){
        super()
        this.state = {email:"", password:""}
    }
    handleEmailChange = (e) => {
        this.setState({email: e.target.value})
    }
    handlePasswordChange = (e) => {
        this.setState({password: e.target.value})
    }
    handleRegister = async(e) => {
        try {
            e.preventDefault()
            firebase.auth().createUserWithEmailAndPassword
            (this.state.email, this.state.password)
            this.props.router.navigate("/", {replace: true})
        } catch (e) {
            console.log(e)
        }
    }
    render() {
        return(<React.Fragment>
            <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Register Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" 
            onChange={this.handleEmailChange} value= {this.email}/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Registration Password</Form.Label>
            <Form.Control type="password" placeholder="Password" 
            onChange={this.handlePasswordChange} value= {this.password}/>
          </Form.Group>
          <Button variant="primary" type="submit" onClick={this.handleRegister}>
            Submit
          </Button>
          <p>Already have an account? <Link to="/SignIn">Login</Link></p>
        </Form>
        </React.Fragment>)
    }
}
export default withRouter(Register)