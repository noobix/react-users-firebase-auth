import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import firebase from '../firebase/config'
import Users from './Users'
import Form from './UsersForm'

class home extends React.Component {
    signOut = async() => {
        try {
            firebase.auth().signOut()
        } catch (error) {
            console.log(error)
        }
    }
    render(){
        return(<React.Fragment>
            <div>
                <Button variant='success'><Link to="/SignIn">Sign In</Link></Button>
                <Button variant='warning'><Link to="/Register">Register</Link></Button>
                <Button variant='secondary' onClick={this.signOut}>Sign Out</Button>
            </div>
            <Users />
            <Form />
        </React.Fragment>)
    }
} 
export default home