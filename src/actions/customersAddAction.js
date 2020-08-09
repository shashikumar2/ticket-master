import axios from 'axios'
//import { Redirect } from 'react-router-dom'
//import {BrowserRouter,Redirect } from 'react-router-dom'
// sync
import {startGetCustomers} from '../actions/customersAction'
export const setAddCustomers = (customers) => {
    return { type: 'SET_ADD_CUSTOMER', payload: customers}
}

// async 
export const startPostCustomers = (customersdata,redirect) => {
    return (dispatch) => {
        axios.post('http://dct-ticket-master.herokuapp.com/customers', customersdata,{
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
            .then(response => {
                 console.log('customerAddAction', response.data)
                const customers = response.data 
                
                dispatch(setAddCustomers(customers))
                redirect()
                dispatch(startGetCustomers())
                
            })
    }
}

export const startPutCustomer = (customerId,customerdata,redirect) => {
    return (dispatch) => {
        axios.put(`http://dct-ticket-master.herokuapp.com/customers/${customerId}`, customerdata,{
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
            .then(response => {
                 console.log('customerEditAction', response.data)
                const customer = response.data 
                
                dispatch(setAddCustomers(customer))
                redirect()
                dispatch(startGetCustomers())
                
            })
    }
}