import axios from 'axios'
//import { Redirect } from 'react-router-dom'
//import {BrowserRouter,Redirect } from 'react-router-dom'
// sync
import {startGetTickets} from '../actions/ticketsGetAction'

export const setShowTicket = (ticket) => {
    return { type: 'SET_SHOWTICKET', payload: ticket}
}

// async 
export const startShowTicket = (ticketId, redirect) => {
    return (dispatch) => {
        console.log('ticketShowAction',ticketId)
        axios.get(`http://dct-ticket-master.herokuapp.com/tickets/${ticketId}`, {
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