import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

class EmployeeShow extends React.Component{
    render(){
        const tickets = this.props.tickets1.filter(tick => tick.employees[0]._id === this.props.employee._id)
        console.log('employShow', tickets)
        return (
            <div>                
                <h3>{this.props.employee.name} - {this.props.employee.email} </h3>
                <Link to={`/employees/edit/${this.props.employee._id}`} >Edit</Link> 
                <h2>Tickets - {tickets.length} </h2>
                {
                tickets.map((ticket,i) =>{
                return(
                <table border='1' >               
                 <tbody>
                           <tr >                                
                                <td>Code Number - {ticket.code}</td>
                            </tr>                 
                            <tr >                                
                                <td>Customer - {this.props.customers.find(cust=>cust._id ===ticket.customer).name}</td>
                            </tr> 
                            <tr> 
                                <td>Department - {this.props.departments.find(dept=>dept._id ===ticket.department).name}</td>
                            </tr> 
                            <tr >
                                <td> Employees - {(this.props.employees.find(emp=>emp._id ===ticket.employees[0]._id)).name}</td> 
                            </tr>    
                            <tr >
                                <td>Message - {ticket.message}</td> 
                            </tr>    
                            <tr >
                                <td>Priority -  {ticket.priority}</td>                                                            
                            </tr>                                     
                  </tbody>
                 </table> 
                )
                }) 
                }
            </div>
            )
           }
}

const mapStateToProps = (state) => {
    return {        
        employee: state.employee,
        tickets1: state.tickets,
        customers:state.customers,
        departments:state.departmentsGet,
        employees:state.employees,        
    }
}
export default connect(mapStateToProps)(EmployeeShow)