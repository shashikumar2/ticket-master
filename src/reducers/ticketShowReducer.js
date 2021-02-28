const ticketInitialState = {}

const ticketShowReducer = (state = ticketInitialState, action) => {
    switch(action.type) {
        case 'SET_SHOWTICKET' : {
            return Object.assign({},action.payload)
        }
        default: {
            return Object.assign({},state)
        }
    }
}

export default ticketShowReducer