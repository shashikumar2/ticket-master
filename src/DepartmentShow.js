import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

class DepartmentShow extends React.Component{
    render(){
        const tickets = this.props.tickets1.filter(tick => tick.department === this.props.department._id)
        return (
            <div>                
                <h2> Name - {this.props.department.name} </h2>
                <Link to={`/departments/edit/${this.props.department._id}`} >Edit</Link> 

                <h2>Tickets - {tickets.length} </h2>
                {
                tickets.map((ticket,i) =>{
                return(
                <table border='1' >
                 <tbody>
                           <tr>                                
                                <td>Code Number - {ticket.code}</td>
                            </tr>                 
                            <tr>                                
                                <td>Customer - {this.props.customers.find(cust=>cust._id ===ticket.customer).name}</td>
                            </tr> 
                            <tr> 
                                <td>Department - {this.props.departments.find(dept=>dept._id ===ticket.department).name}</td>
                            </tr> 
                            <tr>
                                <td> Employees - {(this.props.employees.find(emp=>emp._id ===ticket.employees[0]._id)).name}</td> 
                            </tr>    
                            <tr>
                                <td>Message - {ticket.message}</td> 
                            </tr>    
                            <tr>
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
        department: state.department,
        tickets1: state.tickets,
        customers:state.customers,
        departments:state.departmentsGet,
        employees:state.employees,        
    }
}

export default connect(mapStateToProps)(DepartmentShow)