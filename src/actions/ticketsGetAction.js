import axios from 'axios'

// sync
export const setTickets = (tickets) => {
    return { type: 'SET_TICKETS', payload: tickets}
}

// async 
export const startGetTickets = () => {
    return (dispatch) => {
        axios.get('http://dct-ticket-master.herokuapp.com/tickets', {
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
            .then(response => {
                 console.log('ticketsAction',response.data)
                const tickets = response.data 
                
                dispatch(setTickets(tickets))
                //redirect()
                
            })
    }
}