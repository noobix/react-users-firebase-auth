const initialState = {
    users: [],
    //user: null
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USERS" :
            //console.log("payload", action.payload);
            return {...state, users: action.payload}
        default:
            return state
    }
}
export default usersReducer