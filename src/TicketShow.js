import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {Redirect } from 'react-router-dom'

class TicketShow extends React.Component{

    render(){
        console.log("ticketShow",this.props.ticket)
        return (
            <div>                
                <h2>Code Number - {this.props.ticket.code} </h2>
                <table border='1' >
                 <tbody>                
                            <tr >                                
                                <td>Customer - {this.props.customers.find(cust=>cust._id ===this.props.ticket.customer).name}</td>
                            </tr> 
                            <tr> 
                                <td>Department - {this.props.departments.find(dept=>dept._id ===this.props.ticket.department).name}</td>
                            </tr> 
                            <tr >
                                <td> Employees - {(this.props.employees.find(emp=>emp._id ===this.props.ticket.employees[0]._id)).name}</td> 
                            </tr>    
                            <tr >
                                <td>Message - {this.props.ticket.message}</td> 
                            </tr>    
                            <tr >
                                <td>Priority -  {this.props.ticket.priority}</td>                                                            
                            </tr>                              
                  </tbody>
                </table>

                <Link to={`/tickets/edit/${this.props.ticket._id}`} >Edit</Link> 
            </div>
            )
        }
}

const mapStateToProps = (state) => {    
    return {        
        ticket: state.ticket,
        customers:state.customers,
        departments:state.departmentsGet,
        employees:state.employees,            
    }
}

export default connect(mapStateToProps)(TicketShow)