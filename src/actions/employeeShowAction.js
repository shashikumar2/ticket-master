import axios from 'axios'

// sync
import {startGetEmployees} from '../actions/employeesGetAction'

export const setShowEmployee = (employee) => {
    return { type: 'SET_SHOWEMPLOYEE', payload: employee}
}

// async 
export const startShowEmployee = (employeeId, redirect) => {
    return (dispatch) => {
        console.log('employeeShowAction',employeeId)
        axios.get(`http://dct-tm.herokuapp.com/api/employees/${employeeId}`, {
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