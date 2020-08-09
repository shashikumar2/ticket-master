import axios from 'axios'

import {startGetEmployees} from '../actions/employeesGetAction'


// async 
export const startPostEmployee = (employeedata,redirect) => {
    return (dispatch) => {
        axios.post('http://dct-ticket-master.herokuapp.com/employees', employeedata,{
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
            .then(response => {
                 console.log('employeeAddAction', response.data)
               // const customers = response.data 
                                
                redirect()
                dispatch(startGetEmployees())
                
            })
    }
}

export const startPutEmployee = (employeeId, employeedata,redirect) => {
    return (dispatch) => {
        axios.put(`http://dct-ticket-master.herokuapp.com/employees/${employeeId}`, employeedata,{
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
            .then(response => {
                // const customers = response.data 
                 console.log('employeeEditAction', response.data)
               
                                
                redirect()
                dispatch(startGetEmployees())
                
            })
    }
}