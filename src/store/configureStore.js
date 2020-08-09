import { createStore, combineReducers, applyMiddleware } from 'redux'
// npm install redux-thunk
import thunk from 'redux-thunk'

import userReducer from '../reducers/userReducer'
import userLoginReducer from '../reducers/userLoginReducer'
import customersReducer from '../reducers/customersReducer'
import customersAddReducer from '../reducers/customersAddReducer'
import customerDeleteReducer from '../reducers/customerDeleteReducer'
import customerShowReducer from '../reducers/customerShowReducer'

import departmentAddReducer from '../reducers/departmentAddReducer'
import departmentsGetReducer from '../reducers/departmentsGetReducer'
import departmentShowReducer from '../reducers/departmentShowReducer'

import employeesGetReducer from '../reducers/employeesGetReducer'
import employeeShowReducer from '../reducers/employeeShowReducer'

import ticketsGetReducer from '../reducers/ticketsGetReducer'
import ticketShowReducer from '../reducers/ticketShowReducer'







const configureStore = () => {
    const store = createStore(combineReducers({        
        user: userReducer,
        loginStatus: userLoginReducer,

        customers: customersReducer,
        customersAdd : customersAddReducer,
        customerDelete: customerDeleteReducer,
        customer: customerShowReducer,

        departmentAdd:departmentAddReducer,
        departmentsGet : departmentsGetReducer,
        department : departmentShowReducer,

        employees : employeesGetReducer,
        employee : employeeShowReducer,

        tickets : ticketsGetReducer,
        ticket : ticketShowReducer

    

    }), applyMiddleware(thunk))
    return store 
}

export default configureStore