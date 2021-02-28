import axios from 'axios'

// sync
import {startGetCustomers} from '../actions/customersAction'

export const setDeleteCustomer = (customer) => {
    return { type: 'SET_DELETECUSTOMER', payload: customer}
}

// async 
export const startDeleteCustomer = (customerId) => {
    return (dispatch) => {
        console.log('custdelAction',customerId)
        axios.delete(`http://dct-tm.herokuapp.com/api/customers/${customerId}`, {
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
            .then(response => {
                 console.log('customerDeleteAction', response.data)
                const customer = response.data 
                
                dispatch(setDeleteCustomer(customer))
                //redirect()
                dispatch(startGetCustomers())
                
            })
    }
}