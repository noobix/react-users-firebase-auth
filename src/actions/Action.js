export const setUsers = (users) => {
    return{
        type: "SET_USERS",
        payload: users
    }
}
export const setUserDetails = (user) => {
    return{
        type: "SET_USER_DETAILS",
        payload: user
    }
}