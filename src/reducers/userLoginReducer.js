const userLoginInitialState = false

const userLoginReducer = (state = userLoginInitialState, action) => {
    switch(action.type) {
        case 'SET_USER_LOGIN' : {
            return !state
        }
        case 'SET_USER_LOGOUT' : {
            return false
        }
        default: {
            return state
        }
    }
}

export default userLoginReducer