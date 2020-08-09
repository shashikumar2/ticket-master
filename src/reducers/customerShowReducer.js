const customerInitialState = {}

const customerShowReducer = (state = customerInitialState, action) => {
    switch(action.type) {
        case 'SET_SHOWCUSTOMER' : {
            return Object.assign({},action.payload)
        }
        default: {
            // return [...state]
            return Object.assign({},state)
        }
    }
}

export default customerShowReducer