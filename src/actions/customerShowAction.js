import axios from 'axios'
//import { Redirect } from 'react-router-dom'
//import {BrowserRouter,Redirect } from 'react-router-dom'
// sync
import {startGetCustomers} from '../actions/customersAction'

export const setShowCustomer = (customer) => {
    return { type: 'SET_SHOWCUSTOMER', payload: customer}
}

// async 
export const startShowCustomer = (customerId, redirect) => {
    return (dispatch) => {
        console.log('custShowAction',customerId)
        axios.get(`http://dct-ticket-master.herokuapp.com/customers/${customerId}`, {
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
            .then(response => {
                 console.log('customerShowAction', response.data)
                const customer = response.data 
                
                dispatch(setShowCustomer(customer))
                redirect()
                
                
            })
    }
}