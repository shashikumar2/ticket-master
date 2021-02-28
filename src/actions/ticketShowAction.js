import axios from 'axios'

// sync
import {startGetTickets} from '../actions/ticketsGetAction'

export const setShowTicket = (ticket) => {
    return { type: 'SET_SHOWTICKET', payload: ticket}
}

// async 
export const startShowTicket = (ticketId, redirect) => {
    return (dispatch) => {
        console.log('ticketShowAction',ticketId)
        axios.get(`http://dct-tm.herokuapp.com/api/tickets/${ticketId}`, {
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
            .then(response => {
                 console.log('ticketShowAction', response.data)
                const ticket = response.data 
                
                dispatch(setShowTicket(ticket))
                redirect()
                
                
            })
    }
}