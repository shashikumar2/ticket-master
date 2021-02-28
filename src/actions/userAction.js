import axios from 'axios'

// sync
export const setUser = (user) => {
    return { type: 'SET_USER', payload: user}
}

// async 
export const startPostUser = (userdata,redirect) => {
    return (dispatch) => {
        axios.post('http://dct-tm.herokuapp.com/api/users/register', userdata)
            .then(response => {
                 console.log(response.data)
                const user = response.data 
                
                dispatch(setUser(user))
                redirect()
                
            })
    }
}

