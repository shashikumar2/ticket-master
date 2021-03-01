import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { Provider } from 'react-redux' 
import configureStore from './store/configureStore'
import {startPostUser} from './actions/userAction'

import {startGetCustomers} from './actions/customersAction'

import {setUserLogin} from './actions/userLoginAction'

import {startGetDepartments} from './actions/departmentsGetAction'
import {startGetEmployees} from './actions/employeesGetAction'
import {startGetTickets} from './actions/ticketsGetAction'

const store = configureStore() 

store.subscribe(() => {
    console.log('index',store.getState())
})

store.dispatch(setUserLogin())
store.dispatch(startGetCustomers())
store.dispatch(startGetDepartments())
store.dispatch(startGetEmployees())
store.dispatch(startGetTickets())






const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('root') )



