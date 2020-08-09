const customerInitialState = []

const customerDeleteReducer = (state = customerInitialState, action) => {
    switch(action.type) {
        case 'SET_DELETECUSTOMER' : {
            return [].concat(action.payload)
        }
        default: {
            // return [...state]
            return [].concat(state)
        }
    }
}

export default customerDeleteReducer