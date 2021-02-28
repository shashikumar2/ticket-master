const employeeInitialState = {}

const employeeShowReducer = (state = employeeInitialState, action) => {
    switch(action.type) {
        case 'SET_SHOWEMPLOYEE' : {
            return Object.assign({},action.payload)
        }
        default: {
            return Object.assign({},state)
        }
    }
}

export default employeeShowReducer