import axios from 'axios'

// sync
import {startGetCustomers} from '../actions/customersAction'

export const setShowCustomer = (customer) => {
    return { type: 'SET_SHOWCUSTOMER', payload: customer}
}

// async 
export const startShowCustomer = (customerId, redirect) => {
    return (dispatch) => {
        console.log('custShowAction',customerId)
        axios.get(`http://dct-tm.herokuapp.com/api/customers/${customerId}`, {
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