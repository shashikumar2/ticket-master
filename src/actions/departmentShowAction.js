import axios from 'axios'

// sync
import {startGetDepartments} from '../actions/customersAction'

export const setShowDepartment = (department) => {
    return { type: 'SET_SHOW_DEPARTMENT', payload: department}
}

// async 
export const startShowDepartment = (departmentId, redirect) => {
    return (dispatch) => {
        console.log('departmentShowAction',departmentId)
        axios.get(`http://dct-tm.herokuapp.com/api/departments/${departmentId}`, {
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
            .then(response => {
                 console.log('departmentShowAction', response.data)
                const department = response.data 
                
                dispatch(setShowDepartment(department))
                redirect()
                
                
            })
    }
}