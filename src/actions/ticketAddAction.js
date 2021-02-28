import axios from 'axios'

import {startGetTickets} from '../actions/ticketsGetAction'


// async 
export const startPostTicket = (ticketdata,redirect) => {
    return (dispatch) => {
        axios.post('http://dct-tm.herokuapp.com/api/tickets', ticketdata,{
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
            .then(response => {
                 console.log('ticketAddAction', response.data)
               // const tickets = response.data 
                                
                redirect()
                dispatch(startGetTickets())
                
            })
    }
}

export const startPutTicket = (ticketId,ticketdata,redirect) => {
    return (dispatch) => {
        axios.put(`http://dct-tm.herokuapp.com/api/tickets/${ticketId}`, ticketdata,{
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
            .then(response => {
                 console.log('ticketEditAction', response.data)
               // const tickets = response.data 
                                
                redirect()
                dispatch(startGetTickets())
                
            })
    }
}

export const startPutTicketCompleted = (ticketId,ticketdata) => {
    return (dispatch) => {
        axios.put(`http://dct-tm.herokuapp.com/api/tickets/${ticketId}`, ticketdata,{
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
            .then(response => {
                 console.log('ticketCompletedEditAction', response.data)
               // const tickets = response.data 
        
                dispatch(startGetTickets())
                
            })
    }
}