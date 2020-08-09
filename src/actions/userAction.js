import axios from 'axios'
//import { Redirect } from 'react-router-dom'
//import {BrowserRouter,Redirect } from 'react-router-dom'
// sync
export const setUser = (user) => {
    return { type: 'SET_USER', payload: user}
}

// async 
export const startPostUser = (userdata,redirect) => {
    return (dispatch) => {
        axios.post('http://dct-ticket-master.herokuapp.com/users/register', userdata)
            .then(response => {
                 console.log(response.data)
                const user = response.data 
                
                dispatch(setUser(user))
                redirect()
                
            })
    }
}

