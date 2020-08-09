import axios from 'axios'

// sync
export const setGetDepartments = (departments) => {
    return { type: 'SET_GET_DEPARTMENTS', payload: departments}
}

// async 
export const startGetDepartments = () => {
    return (dispatch) => {
        axios.get('http://dct-ticket-master.herokuapp.com/departments', {
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
            .then(response => {
                 console.log('departmentsGetAction',response.data)
                const departments = response.data 
                
                dispatch(setGetDepartments(departments))
                //redirect()
                
            })
    }
}