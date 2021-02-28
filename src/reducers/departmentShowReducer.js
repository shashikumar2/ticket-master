const departmentInitialState = {}

const departmentShowReducer = (state = departmentInitialState, action) => {
    switch(action.type) {
        case 'SET_SHOW_DEPARTMENT' : {
            return Object.assign({},action.payload)
        }
        default: {
            return Object.assign({},state)
        }
    }
}

export default departmentShowReducer