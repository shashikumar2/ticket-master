import axios from 'axios'
//import { Redirect } from 'react-router-dom'
//import {BrowserRouter,Redirect } from 'react-router-dom'
// sync
import {startGetEmployees} from '../actions/employeesGetAction'

/*export const setDeleteCustomer = (customer) => {
    return { type: 'SET_DELETECUSTOMER', payload: customer}
}*/

// async 
export const startDeleteEmployee = (employeeId) => {
    return (dispatch) => {
        console.log('EmpdelAction',employeeId)
        axios.delete(`http://dct-ticket-master.herokuapp.com/employees/${employeeId}`, {
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
            .then(response => {
                 console.log('EmployeeDeleteAction', response.data)
                //const customer = response.data 
                
               // dispatch(setDeleteCustomer(customer))
                //redirect()
                dispatch(startGetEmployees())
                
            })
    }
}