import axios from 'axios'
//import { Redirect } from 'react-router-dom'
//import {BrowserRouter,Redirect } from 'react-router-dom'
// sync
import {startGetDepartments} from '../actions/departmentsGetAction'
export const setAddDepartment = (department) => {
    return { type: 'SET_ADD_DEPARTMENT', payload: department}
}

// async 
export const startPostDepartment = (departmentdata) => {
    return (dispatch) => {
        axios.post('http://dct-ticket-master.herokuapp.com/departments', departmentdata,{
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
            .then(response => {
                 console.log('departmentAddAction', response.data)
                const department = response.data 
                
                dispatch(setAddDepartment(department))
              //  redirect()
                dispatch(startGetDepartments())
                
            })
    }
}

export const startPutDepartment = (departmentId, departmentdata, redirect) => {
    return (dispatch) => {
        axios.put(`http://dct-ticket-master.herokuapp.com/departments/${departmentId}`, departmentdata,{
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
            .then(response => {
                 console.log('departmentEditAction', response.data)
                const department = response.data 
                
                dispatch(setAddDepartment(department))
                redirect()
                dispatch(startGetDepartments())
                
            })
    }
}