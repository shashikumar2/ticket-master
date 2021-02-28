import axios from 'axios'

// sync
import {startGetTickets} from '../actions/ticketsGetAction'

/*export const setDeleteCustomer = (customer) => {
    return { type: 'SET_DELETECUSTOMER', payload: customer}
}*/

// async 
export const startDeleteTicket = (ticketId) => {
    return (dispatch) => {
        console.log('ticketdelAction',ticketId)
        axios.delete(`http://dct-tm.herokuapp.com/api/tickets/${ticketId}`, {
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