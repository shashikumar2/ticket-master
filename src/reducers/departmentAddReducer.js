const departmentInitialState = []

const departmentAddReducer = (state = departmentInitialState, action) => {
    switch(action.type) {
        case 'SET_ADD_DEPARTMENT' : {
            return Object.assign({},action.payload)
        }
        default: {
            return Object.assign({},state)
        }
    }
}

export default departmentAddReducer