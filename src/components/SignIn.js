import React from "react";
import {Form, Button} from 'react-bootstrap'
import firebase from "../firebase/config";
import withRouter from '../withRouter'
import firebaseProvider from 'firebase'
import {Link} from 'react-router-dom'

class SignIn extends React.Component {
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
  handleSignIn = async(e) => {
    e.preventDefault()
    try {
      const user = await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      this.props.router.navigate("/",{replace: true})
    } catch (e) {
      console.log(e)
    }
  }
  handleGoogleSignIn = async(e) => {
    e.preventDefault()
    try {
      const provider = new firebaseProvider.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider)
      this.props.router.navigate("/", {replace: true})
    } catch (e) {
      console.log(e)
    }
  }
  render() {
    return (
      <React.Fragment>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" 
            onChange={this.handleEmailChange} value={this.email}/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" 
            onChange={this.handlePasswordChange} value={this.password}/>
          </Form.Group>
          <Button variant="primary" type="submit" onClick={this.handleSignIn}>
            Submit
          </Button>
          <Button variant="secondary" type="submit" onClick={this.handleGoogleSignIn}>
            Sign In With GOOGLE
          </Button>
          <p>Don't have an account? <Link to="/Register">Register</Link></p>
        </Form>
      </React.Fragment>
    );
  }
}
export default withRouter(SignIn);
