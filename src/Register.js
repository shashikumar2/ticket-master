import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { startPostUser } from './actions/userAction'
import {Redirect } from 'react-router-dom'

class Register extends React.Component{
    constructor(){
        super()
        this.state= {
            username : '',
            email : '',
            password : ''

        }
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e)=>{
     e.preventDefault()
    const redirect=()=>{
     
        return this.props.history.push('/login')
    }
     this.props.dispatch(startPostUser(this.state,redirect))
     
    
}



    render(){
        return (
            <div>
                <h1> Register </h1>
                <form onSubmit = {this.handleSubmit}>
                    <label htmlFor= 'username'>Username</label>   
                    <input type ='text' id ='name' name ='username' value = { this.state.username} onChange= {this.handleChange}/>
                    <br/>
                    <br/>

                    <label htmlFor= 'email'>Email</label>   
                    <input type ='text' id ='email' name='email'value = { this.state.email} onChange= {this.handleChange}/>
                    <br/>
                    <br/>

                    <label htmlFor= 'password'>Password</label>   
                    <input type ='password' id ='password' name='password' value = { this.state.password} onChange= {this.handleChange}/>
                    <br/>
                    <br/>

                    <input type ='submit' value='Register' />

                    </form>
                </div>
        )
    }
}
export default connect()(Register)

