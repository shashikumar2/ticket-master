import React from 'react'

import { connect } from 'react-redux'
import {startGetTickets} from './actions/ticketsGetAction'

import {startDeleteTicket} from './actions/ticketDeleteAction'
import {startShowTicket} from './actions/ticketShowAction'
import { startPutTicketCompleted } from './actions/ticketAddAction'

import { Link } from 'react-router-dom'

class Tickets extends React.Component{
    constructor(){
        super()
        this.state = {
            status:false

                    }
                }    

    componentDidMount() {  
        if (this.props.tickets.length === 0) {
            this.props.dispatch(startGetTickets())
        }
    }

     handleShow = (id) =>{
        const redirect=()=>{
     
            return this.props.history.push(`/tickets/${this.props.ticket._id}`)
        }
        this.props.dispatch(startShowTicket(id,redirect)) 

    }

     handleRemove = (id) =>{
        this.props.dispatch(startDeleteTicket(id))
        
    }

    handleComplete = (ticket) => {
        console.log('hi')

        this.props.dispatch(startPutTicketCompleted(ticket._id, {isResolved:!ticket.isResolved}))

    }

    handlePending =() => {
        this.setState({
            status : false
            })

    }

    handleCompleted =() => {
        this.setState({
        status : true
        })
    }
     
    render(){
        console.log('this.props.tickets',this.props.tickets)
        console.log('this.props.customers',this.props.customers)
        console.log('this.props.departments',this.props.departments)
        console.log('this.props.employees',this.props.employees)

        const ticketsCompleted = this.props.tickets.filter(tick => tick.isResolved=== true)
        const ticketsPending = this.props.tickets.filter(tick => tick.isResolved=== false)
        const percentTicketsCompleted = Math.round((ticketsCompleted.length/this.props.tickets.length)*100)
    return(
    
        <div>
            {
            ( this.props.tickets && this.props.customers && this.props.departments && this.props.employees) ? (  <div>
               
             <br/><br/>

            <button onClick={this.handlePending}>Pending</button>
            <button onClick={this.handleCompleted}>Completed</button>
        <h3> Tickets - {this.props.tickets.length} </h3>
        { this.state.status== false && (
                   <div>
        <table border='1' >
            <thead>
                <tr>
                    <th> Code No</th>
                    <th> Customer</th>
                    <th> Department</th>
                    <th> Employees</th>
                    <th> Message</th>
                    <th> Priority</th>
                    <th> Actions</th>
                    <th> Remove</th>
                    <th> Complete</th>
  
                </tr>
            </thead>

            <tbody>
               
                {
                   ticketsPending.map((ticket,i) =>{
                       return(
                            <tr key={i}>
                                <td> {ticket.code}</td>
                                <td> {this.props.customers.find(cust=>cust._id ===ticket.customer).name}</td>
                                <td> {this.props.departments.find(dept=>dept._id ===ticket.department).name}</td>
                                <td> {(this.props.employees.find(emp=>emp._id ===ticket.employees[0]._id)).name}</td> 
                                <td> {ticket.message}</td>    
                                <td> {ticket.priority}</td>                              
                                <td> { <button onClick={() => {
                                                   this.handleShow(ticket._id)
                                                    }} > Show</button>}</td>
                                <td> { <button onClick={() => {
                                                   this.handleRemove(ticket._id)
                                                    }}>Remove</button>}</td>  
                                <td>
                                <input type="checkbox" checked={ticket.isResolved} onChange={() => {
                                                        this.handleComplete(ticket)
                                                    }} /> 
                                                                        
                                </td>                             
                            </tr>                 
                       )
                   }) 
                }
                              
            </tbody>
        </table>
        </div>
        )}

{ this.state.status && (
                   <div>
        <table border='1' >
            <thead>
                <tr>
                    <th> Code No</th>
                    <th> Customer</th>
                    <th> Department</th>
                    <th> Employees</th>
                    <th> Message</th>
                    <th> Priority</th>
                    <th> Actions</th>
                    <th> Remove</th>
                    <th> Complete</th>
  
                </tr>
            </thead>

            <tbody>
               
                {
                   ticketsCompleted.map((ticket,i) =>{
                       return(
                            <tr key={i}>
                                <td> {ticket.code}</td>
                                <td> {this.props.customers.find(cust=>cust._id ===ticket.customer).name}</td>
                                <td> {this.props.departments.find(dept=>dept._id ===ticket.department).name}</td>
                                <td> {(this.props.employees.find(emp=>emp._id ===ticket.employees[0]._id)).name}</td> 
                                <td> {ticket.message}</td>    
                                <td> {ticket.priority}</td>                              
                                <td> { <button onClick={() => {
                                                   this.handleShow(ticket._id)
                                                    }} > Show</button>}</td>
                                <td> { <button onClick={() => {
                                                   this.handleRemove(ticket._id)
                                                    }}>Remove</button>}</td>  
                                <td>
                                <input type="checkbox" checked={ticket.isResolved} onChange={() => {
                                                        this.handleComplete(ticket)
                                                    }} /> 
                                                                        
                                </td>                             
                            </tr>                 
                       )
                   }) 
                }              
            </tbody>
        </table>
        </div>
        )}
        <br/> 
        <Link to={`/tickets/new`} >Add Ticket</Link> 

        <br/> 
        <h3>Completed Tickets: {percentTicketsCompleted}% </h3>
        <progress value={percentTicketsCompleted} max='100' > 32% </progress>

        </div> ) : (
                        <p> loading....</p>
                    )
        }

        </div>
    )
 }    
}
const mapStateToProps = (state) => {
    return {
        tickets:state.tickets,
        ticket : state.ticket,
        customers:state.customers,
        departments:state.departmentsGet,
        employees:state.employees,        
    }
}

export default connect(mapStateToProps)(Tickets)