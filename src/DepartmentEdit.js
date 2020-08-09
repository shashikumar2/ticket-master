import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {Redirect } from 'react-router-dom'
import { startPutDepartment } from './actions/departmentAddAction'

class DepartmentEdit extends React.Component{
    constructor(props){
        super()
        this.state= {
            name : props.department.name,            
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
     
       return this.props.history.push(`/departments/${this.props.department._id}`)
    }
     this.props.dispatch(startPutDepartment(this.props.department._id, this.state, redirect))   
}




    render(){
        return (
            <div>
                <h3> Edit Department </h3>
                <form onSubmit = {this.handleSubmit}>
                    <label htmlFor= 'name'>Name</label>   
                    <input type ='text' id ='name' name ='name' value = { this.state.name} onChange= {this.handleChange}/>
                    <br/>
                    <br/>
                    <input type ='submit' value='Add' />

                    </form>
                
            </div>

               )
           }

}
const mapStateToProps = (state) => {
    return {
        department:state.department,        
    }
}
export default connect(mapStateToProps)(DepartmentEdit)