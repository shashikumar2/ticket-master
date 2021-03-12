import React from 'react'
import { connect } from 'react-redux'
import { startPostUserLogin } from './actions/userLoginAction'

class Register extends React.Component{
    constructor(){
        super()
        this.state= {            
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
    const redirectLogin=()=>{     
        return this.props.history.push('/')
    }    
     this.props.dispatch(startPostUserLogin(this.state,redirectLogin))    
}

    render(){
        return (
            <div>
                <h1> Login </h1>
                <form onSubmit = {this.handleSubmit}>
                    
                    <label htmlFor= 'email'>Email</label>   
                    <input type ='text' id ='email' name='email'value = { this.state.email} onChange= {this.handleChange}/>
                    <br/>
                    <br/>

                    <label htmlFor= 'password'>Password</label>   
                    <input type ='password' id ='password' name='password' value = { this.state.password} onChange= {this.handleChange}/>
                    <br/>
                    <br/>

                    <input type ='submit' value='Login' />

                    </form>
                </div>
        )
    }
}
export default connect()(Register)