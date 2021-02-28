const customersInitialState = []

const customersAddReducer = (state = customersInitialState, action) => {
    switch(action.type) {
        case 'SET_ADD_CUSTOMER' : {
            return [].concat(action.payload)
        }
        default: {
            return [].concat(state)
        }
    }
}

export default customersAddReducer