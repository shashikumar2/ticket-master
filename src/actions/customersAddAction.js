import axios from 'axios'

// sync
import {startGetCustomers} from '../actions/customersAction'
export const setAddCustomers = (customers) => {
    return { type: 'SET_ADD_CUSTOMER', payload: customers}
}

// async 
export const startPostCustomers = (customersdata,redirect) => {
    return (dispatch) => {
        axios.post('http://dct-tm.herokuapp.com/api/customers', customersdata,{
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
        axios.put(`http://dct-tm.herokuapp.com/api/customers/${customerId}`, customerdata,{
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