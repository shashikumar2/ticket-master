import axios from 'axios'
//import { Redirect } from 'react-router-dom'
//import {BrowserRouter,Redirect } from 'react-router-dom'
// sync
import {startGetDepartments} from '../actions/departmentsGetAction'



// async 
export const startDeleteDepartment = (departmentId) => {
    return (dispatch) => {
        console.log('deptdelAction',departmentId)
        axios.delete(`http://dct-ticket-master.herokuapp.com/departments/${departmentId}`, {
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
            .then(response => {
                 console.log('departmentDeleteAction', response.data)
               // const department = response.data 
                
               
                //redirect()
                dispatch(startGetDepartments())
                
            })
    }
}