import axios from 'axios'

export const setUserLogin = () => {
    return { type: 'SET_USER_LOGIN'}
}

// async 
export const startPostUserLogin = (userLoginData, redirectLogin) => {
    return (dispatch) => {
        axios.post('http://dct-ticket-master.herokuapp.com/users/login', userLoginData)
            .then(response => {
                 console.log('userLoginAction', response.data)
                const token = response.data 
                localStorage.setItem('token',token.token)
                
                dispatch(setUserLogin())

                redirectLogin()                
            })
    }
}

export const setUserLogout = () => {
    return { type: 'SET_USER_LOGOUT'}
}


export const startDeleteUserLogout = () => {
    return (dispatch) => {
        axios.delete('http://dct-ticket-master.herokuapp.com/users/logout', {
        headers : {
            'x-auth' : localStorage.getItem('token')
         }
        })

            .then(response => {
                 console.log('userLogoutAction', response.data)
               // const token = response.data 
               if(response.data.notice) {
                 alert(response.data.notice)
                localStorage.removeItem('token')
                
                dispatch(setUserLogout())
                window.location.href = "/"

                 
               }              
            })
    }
}

