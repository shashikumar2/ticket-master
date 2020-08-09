const employeesInitialState = []

const employeesReducer = (state = employeesInitialState, action) => {
    switch(action.type) {
        case 'SET_EMPLOYEES' : {
            return [].concat(action.payload)
        }
        default: {
            // return [...state]
            return [].concat(state)
        }
    }
}

export default employeesReducer