import "./App.css";
import React from "react";
import firebase from './firebase/config'
import {setUsers, setUserDetails} from './actions/Action'
import {connect} from 'react-redux'
import Router from './Router' 

class App extends React.Component {
  componentDidMount = () => {
    firebase.firestore().collection("users").onSnapshot((document) => {
      let users = [];
      document.forEach((doc) => {
        users.push(doc.data())
      });
      this.props.setUsers(users)
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user){
        this.props.setUserDetails(user)
      }
      else{
        this.props.setUserDetails(null)
      }
    })
  }
  render(){
    return(<div>
      <Router />
    </div>)}

}
const mapDispatchToProps = {
  setUsers: setUsers,
  setUserDetails: setUserDetails
}

export default connect(null, mapDispatchToProps) (App);
