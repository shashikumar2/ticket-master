import axios from 'axios'

// sync
export const setEmployees = (employees) => {
    return { type: 'SET_EMPLOYEES', payload: employees}
}

// async 
export const startGetEmployees = () => {
    return (dispatch) => {
        axios.get('http://dct-tm.herokuapp.com/api/employees', {
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
            .then(response => {
                 console.log('employeesAction',response.data)
                const employees = response.data 
                
                dispatch(setEmployees(employees))
                //redirect()
                
            })
    }
}