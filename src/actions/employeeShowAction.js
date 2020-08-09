import axios from 'axios'
//import { Redirect } from 'react-router-dom'
//import {BrowserRouter,Redirect } from 'react-router-dom'
// sync
import {startGetEmployees} from '../actions/employeesGetAction'

export const setShowEmployee = (employee) => {
    return { type: 'SET_SHOWEMPLOYEE', payload: employee}
}

// async 
export const startShowEmployee = (employeeId, redirect) => {
    return (dispatch) => {
        console.log('employeeShowAction',employeeId)
        axios.get(`http://dct-ticket-master.herokuapp.com/employees/${employeeId}`, {
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
            .then(response => {
                 console.log('employeeShowAction', response.data)
                const employee = response.data 
                
                dispatch(setShowEmployee(employee))
                redirect()
                
                
            })
    }
}