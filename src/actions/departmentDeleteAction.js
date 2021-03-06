import axios from 'axios'

// sync
import {startGetDepartments} from '../actions/departmentsGetAction'



// async 
export const startDeleteDepartment = (departmentId) => {
    return (dispatch) => {
        console.log('deptdelAction',departmentId)
        axios.delete(`http://dct-tm.herokuapp.com/api/departments/${departmentId}`, {
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