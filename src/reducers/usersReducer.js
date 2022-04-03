const initialState = {
    users: [],
    user: null
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USERS" :
            return {...state, users: action.payload}
        default:
            return state
    }
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER_DETAILS":
        return {...state, user: action.payload}
        default:
            return state
    }
}
export default (usersReducer, authReducer)