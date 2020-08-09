import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { startPostCustomers } from './actions/customersAddAction'
import {Redirect } from 'react-router-dom'

class CustomersAdd extends React.Component{
    constructor(){
        super()
        this.state= {
            name : '',
            email : '',
            mobile : ''

        }
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e)=>{
     e.preventDefault()
     console.log(this.state)
    const redirect=()=>{
     
        return this.props.history.push('/customers')
    }
     this.props.dispatch(startPostCustomers(this.state,redirect))
     
    
}



    render(){
        return (
            <div>
                <h1> Add Customer </h1>
                <form onSubmit = {this.handleSubmit}>
                    <label htmlFor= 'name'>Name</label>   
                    <input type ='text' id ='name' name ='name' value = { this.state.name} onChange= {this.handleChange}/>
                    <br/>
                    <br/>

                    <label htmlFor= 'email'>Email</label>   
                    <input type ='text' id ='email' name='email' value = { this.state.email} onChange= {this.handleChange}/>
                    <br/>
                    <br/>

                    <label htmlFor= 'mobile'>Mobile</label>   
                    <input type ='text' id ='mobile' name='mobile' value = { this.state.mobile} onChange= {this.handleChange}/>
                    <br/>
                    <br/>

                    <input type ='submit' value='Submit' />

                    </form>
                </div>
        )
    }
}
export default connect()(CustomersAdd)

