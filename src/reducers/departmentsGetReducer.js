const departmentsInitialState = []

const departmentsGetReducer = (state = departmentsInitialState, action) => {
    switch(action.type) {
        case 'SET_GET_DEPARTMENTS' : {
            return [].concat(action.payload)
        }
        default: {
            // return [...state]
            return [].concat(state)
        }
    }
}

export default departmentsGetReducer