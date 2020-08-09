import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {Redirect } from 'react-router-dom'

class CustomerShow extends React.Component{
    constructor(){
        super()
        this.state = {
            status:'1'

                    }
    }   

    handleAll =() => {
        this.setState({
            status : '1'
            })

    }

    handlePending =() => {
        this.setState({
            status : '2'
            })

    }

    handleCompleted =() => {
        this.setState({
        status : '3'
        })
    }
               
                           
                
    render(){
        const tickets = this.props.tickets1.filter(tick => tick.customer === this.props.customer._id)
        const ticketsCompleted = tickets.filter(tick => tick.isResolved=== true)
        const ticketsPending = tickets.filter(tick => tick.isResolved=== false)

        console.log('customerShowtickets',tickets)
        return (
            <div>
                
                <h3>{this.props.customer.name} - {this.props.customer.email} </h3>
                <Link to={`/customers/edit/${this.props.customer._id}`} >Edit</Link> <br/> <br/>

                <button onClick={this.handleAll}>All</button>

                <button onClick={this.handlePending}>Pending</button>

                <button onClick={this.handleCompleted}>Completed</button>

                <h2>Tickets - {tickets.length} </h2>
                { this.state.status=== '1' && (
                   <div>
                {
                tickets.map((ticket,i) =>{
                return(

                <table border='1' >
                 <thead>
                <tr>  
                </tr>
                 </thead>

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
         )}


       { this.state.status=== '2' && (
                   <div>
                {
                ticketsPending.map((ticket,i) =>{
                return(

                <table border='1' >
                 <thead>
                <tr>  
                </tr>
                 </thead>

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
         )}

{ this.state.status=== '3' && (
                   <div>
                {
                ticketsCompleted.map((ticket,i) =>{
                return(

                <table border='1' >
                 <thead>
                <tr>  
                </tr>
                 </thead>

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
         )}




            </div>

               )
           }

}

const mapStateToProps = (state) => {
    //console.log('maps', )
    return {

        tickets1: state.tickets,
        customer: state.customer,

        customers:state.customers,
        departments:state.departmentsGet,
        employees:state.employees,
        
        
    }
}

export default connect(mapStateToProps)(CustomerShow)