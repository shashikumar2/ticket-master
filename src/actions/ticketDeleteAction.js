import axios from 'axios'
//import { Redirect } from 'react-router-dom'
//import {BrowserRouter,Redirect } from 'react-router-dom'
// sync
import {startGetTickets} from '../actions/ticketsGetAction'

/*export const setDeleteCustomer = (customer) => {
    return { type: 'SET_DELETECUSTOMER', payload: customer}
}*/

// async 
export const startDeleteTicket = (ticketId) => {
    return (dispatch) => {
        console.log('ticketdelAction',ticketId)
        axios.delete(`http://dct-ticket-master.herokuapp.com/tickets/${ticketId}`, {
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
            .then(response => {
                 console.log('ticketDeleteAction', response.data)
                //const customer = response.data 
                
               // dispatch(setDeleteCustomer(customer))
                //redirect()
                dispatch(startGetTickets())
                
            })
    }
}