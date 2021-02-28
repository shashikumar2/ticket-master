import React from 'react'
import Home from './Home'
import Login from './Login'
import Register from './Register'

import Customers from './Customers'
import CustomersAdd from './CustomersAdd'
import CustomerShow from './CustomerShow'
import CustomerEdit from './CustomerEdit'


import Departments from './Departments'
import DepartmentShow from './DepartmentShow'
import DepartmentEdit from './DepartmentEdit'

import Employees from './Employees'
import EmployeeAdd from './EmployeeAdd'
import EmployeeShow from './EmployeeShow'
import EmployeeEdit from './EmployeeEdit'



import Tickets from './Tickets'
import TicketAdd from './TicketAdd'
import TicketShow from './TicketShow'
import TicketEdit from './TicketEdit'


import { startDeleteUserLogout } from './actions/userLoginAction'


import {connect} from 'react-redux'

import { BrowserRouter, Route, Link } from 'react-router-dom'

function App(props) {

    const handleLogout = () => {
        props.dispatch(startDeleteUserLogout())
    }



    return (
        <BrowserRouter>
            <div>
              <h1>Ticket Master</h1>

            {props.loginStatus== false && (
                <div>

            <Link to="/">Home |</Link>
            <Link to="/login">Login |</Link> 
            <Link to="/register">Register</Link>

            <Route path="/" component={Home} exact={true} />

            <Route path="/login" component={Login} exact={true} />
            <Route path="/register" component={Register} exact={true}/>
            </div>

            )}

            {props.loginStatus && (
            <div>

            <Link to="/">Home |</Link>
            <Link to="/customers">Customers |</Link>
            <Link to="/departments">Departments |</Link>
            <Link to="/employees">Employees |</Link>
            <Link to="/tickets">Tickets |</Link>
            <Link to="#"  onClick={handleLogout}>Logout </Link>
            

            <Route path="/" component={Home} exact={true} />
            <Route path="/customers" component={Customers} exact={true} />
            <Route path="/departments" component={Departments} exact={true} />
            <Route path="/employees" component={Employees} exact={true} />
            <Route path="/tickets" component={Tickets} exact={true} />
            

            <Route path="/customers/new" component={CustomersAdd} />
            <Route path={`/customers/${props.customer._id}`} component={CustomerShow} />
            <Route path={`/customers/edit/${props.customer._id}`} component={CustomerEdit} />

            <Route path={`/departments/${props.department._id}`} component={DepartmentShow} />
            <Route path={`/departments/edit/${props.department._id}`} component={DepartmentEdit} />

            <Route path="/employees/new" component={EmployeeAdd} />
            <Route path={`/employees/${props.employee._id}`} component={EmployeeShow} />
            <Route path={`/employees/edit/${props.employee._id}`} component={EmployeeEdit} />

            <Route path="/tickets/new" component={TicketAdd} />
            <Route path={`/tickets/${props.ticket._id}`} component={TicketShow} />
            <Route path={`/tickets/edit/${props.ticket._id}`} component={TicketEdit} />
                      
            </div>

            )}


            </div>
        </BrowserRouter>
    )
}
const mapStateToProps = (state) => {
    return {
        loginStatus:state.loginStatus,
        customer: state.customer,
        department: state.department,
        employee : state.employee,
        ticket : state.ticket        
    }
}
export default connect(mapStateToProps)(App)
