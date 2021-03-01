import React from 'react'
import { connect } from 'react-redux'
import {startGetEmployees} from './actions/employeesGetAction'
import {startDeleteEmployee} from './actions/employeeDeleteAction'
import {startShowEmployee} from './actions/employeeShowAction'
import { Link } from 'react-router-dom'

class Employees extends React.Component{
    componentDidMount() {  
        if (this.props.employees.length === 0) {
            this.props.dispatch(startGetEmployees())
        }
    }

     handleShow = (id) =>{
        const redirect=()=>{
     
            return this.props.history.push(`/employees/${this.props.employee._id}`)
        }
        this.props.dispatch(startShowEmployee(id,redirect)) 

    }

     handleRemove = (id) =>{
        this.props.dispatch(startDeleteEmployee(id))
        
    }
     
    render(){
        console.log(this.props.employees)
    return(
    
        <div>
        <h3> Employees - {this.props.employees.length} </h3>
        <table border='1' >
            <thead>
                <tr>
                    <th> ID</th>
                    <th> Name</th>
                    <th> Email</th>
                    <th> Mobile</th>
                    <th> Department</th>
                    <th> Actions</th>
                    <th> Remove</th>
  
                </tr>
            </thead>

            <tbody>
                {
                   this.props.employees.map((employee,i) =>{
                       return(
                            <tr key={i}>
                                <td> {employee._id}</td>
                                <td> {employee.name}</td>
                                <td> {employee.email}</td>
                                <td> {employee.mobile}</td> 
                                <td> {employee.department.name}</td>                                 
                                <td> { <button onClick={() => {
                                                   this.handleShow(employee._id)
                                                    }} > Show</button>}</td>
                                <td> { <button onClick={() => {
                                                   this.handleRemove(employee._id)
                                                    }}>Remove</button>}</td>                               
                            </tr>                 
                       )
                   }) 
                }
            </tbody>
        </table>
        
        <Link to={`/employees/new`} >Add Employee</Link> 


        </div>
    )

 }

    
}
const mapStateToProps = (state) => {
    return {
        employees:state.employees,
        employee : state.employee
        
        
    }
}

export default connect(mapStateToProps)(Employees)