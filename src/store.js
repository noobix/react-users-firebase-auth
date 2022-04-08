import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import { reduxFirestore, getFirestore } from "redux-firestore";
import thunk from 'redux-thunk';
import usersReducer from './reducers/usersReducer'
import authReducer from './reducers/authReducer'
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import config from './firebase/config'

const reducers = combineReducers({users: usersReducer, auth: authReducer})
const persistConfig = {key: "root", storage}
const persistedReducer = persistReducer(persistConfig, reducers)
const store = createStore(persistedReducer, compose
    (applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
    reactReduxFirebase(config), 
    reduxFirestore(config)))
const persistor = persistStore(store)
export  {store, persistor}