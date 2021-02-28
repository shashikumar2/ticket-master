import axios from 'axios'

// sync
import {startGetEmployees} from '../actions/employeesGetAction'

/*export const setDeleteCustomer = (customer) => {
    return { type: 'SET_DELETECUSTOMER', payload: customer}
}*/

// async 
export const startDeleteEmployee = (employeeId) => {
    return (dispatch) => {
        console.log('EmpdelAction',employeeId)
        axios.delete(`http://dct-tm.herokuapp.com/api/employees/${employeeId}`, {
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