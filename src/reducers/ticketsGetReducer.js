const ticketsInitialState = []

const ticketsReducer = (state = ticketsInitialState, action) => {
    switch(action.type) {
        case 'SET_TICKETS' : {
            return [].concat(action.payload)
        }
        default: {
            return [].concat(state)
        }
    }
}

export default ticketsReducer