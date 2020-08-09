import axios from 'axios'

// sync
export const setCustomers = (customers) => {
    return { type: 'SET_CUSTOMERS', payload: customers}
}

// async 
export const startGetCustomers = () => {
    return (dispatch) => {
        axios.get('http://dct-ticket-master.herokuapp.com/customers', {
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
            .then(response => {
                 console.log('customersAction',response.data)
                const customers = response.data 
                
                dispatch(setCustomers(customers))
                //redirect()
                
            })
    }
}