import axios from 'axios'

// sync
import {startGetDepartments} from '../actions/departmentsGetAction'
export const setAddDepartment = (department) => {
    return { type: 'SET_ADD_DEPARTMENT', payload: department}
}

// async 
export const startPostDepartment = (departmentdata) => {
    return (dispatch) => {
        axios.post('http://dct-tm.herokuapp.com/api/departments', departmentdata,{
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
        axios.put(`http://dct-tm.herokuapp.com/api/departments/${departmentId}`, departmentdata,{
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