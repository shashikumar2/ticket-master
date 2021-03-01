import React from 'react'
import { connect } from 'react-redux'
import {startGetCustomers} from './actions/customersAction'
import {startDeleteCustomer} from './actions/customerDeleteAction'
import {startShowCustomer} from './actions/customerShowAction'
import { Link } from 'react-router-dom'

class Customers extends React.Component{
    componentDidMount() {  
        if (this.props.customers.length === 0) {
            this.props.dispatch(startGetCustomers())
        }
    }

    handleShow = (id) =>{
        const redirect=()=>{     
            return this.props.history.push(`/customers/${this.props.customer._id}`)
        }
        this.props.dispatch(startShowCustomer(id, redirect))
    }

    handleRemove = (id) =>{
        this.props.dispatch(startDeleteCustomer(id))        
    }
     
    render(){
    return(
    
        <div>
        <h3> Customers - {this.props.customers.length} </h3>
        <table border='1' >
            <thead>
                <tr>
                    <th> ID</th>
                    <th> Name</th>
                    <th> Email</th>
                    <th> Mobile</th>
                    <th> Actions</th>
                    <th> Remove</th>
  
                </tr>
            </thead>

            <tbody>
                {
                   this.props.customers.map((customer,i) =>{
                       return(
                            <tr key={i}>
                                <td> {customer._id}</td>
                                <td> {customer.name}</td>
                                <td> {customer.email}</td>
                                <td> {customer.mobile}</td>                                
                                <td> { <button onClick={() => {
                                                   this.handleShow(customer._id)
                                                    }} > Show</button>}</td>
                                <td> { <button onClick={() => {
                                                   this.handleRemove(customer._id)
                                                    }}>Remove</button>}</td>                               
                            </tr>                 
                       )
                   }) 
                }
            </tbody>
        </table>
        
        <Link to={`/customers/new`} >Add Customer</Link> 
        </div>
    )
 }    
}
const mapStateToProps = (state) => {
    return {
        customers:state.customers,
        customer:state.customer
        
    }
}

export default connect(mapStateToProps)(Customers)