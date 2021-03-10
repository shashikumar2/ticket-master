import React from 'react'
import { connect } from 'react-redux'
import { startPutCustomer } from './actions/customersAddAction'


class CustomerEdit extends React.Component{
    constructor(props){
        super()
        this.state= {
            name : props.customer.name,
            email : props.customer.email,
            mobile : props.customer.mobile

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
           return this.props.history.push(`/customers/${this.props.customer._id}`)
       }      
        this.props.dispatch(startPutCustomer(this.props.customer._id, this.state, redirect))       
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

const mapStateToProps = (state) => {
    return {       
        customer:state.customer           
    }
}
export default connect(mapStateToProps)(CustomerEdit)