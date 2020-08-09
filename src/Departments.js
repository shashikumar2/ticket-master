import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {startGetDepartments} from './actions/departmentsGetAction'

import { startPostDepartment } from './actions/departmentAddAction'
import {Redirect } from 'react-router-dom'

import {startDeleteDepartment} from './actions/departmentDeleteAction'
import {startShowDepartment} from './actions/departmentShowAction'

class Departments extends React.Component{
    constructor(){
        super()
        this.state= {
            name : ''
            

        }
    }

    componentDidMount() {  
        if (this.props.departments.length === 0) {
            this.props.dispatch(startGetDepartments())
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
    /*const redirect=()=>{
     
       // return this.props.history.push('/customers')
    }*/
     this.props.dispatch(startPostDepartment(this.state))   
}

       handleShow = (id) =>{
        const redirect=()=>{
     
            return this.props.history.push(`/departments/${this.props.department._id}`)
        }

        this.props.dispatch(startShowDepartment(id,redirect))

         }

          handleRemove = (id) =>{
            this.props.dispatch(startDeleteDepartment(id))
    
          }


    render(){
        return (
            <div>
                <h2> Departments - {this.props.departments.length} </h2>
                <table border='1' >
                   <thead>
                    <tr>
                    
  
                    </tr>
                   </thead>

            <tbody>
                {
                   this.props.departments.map((department,i) =>{
                       return(
                            <tr key={i}>
                                
                                <td> {department.name}</td>
                                                              
                                <td> { <button onClick={() => {
                                                   this.handleShow(department._id)
                                                    }} > Show</button>}</td>
                                <td> { <button onClick={() => {
                                                   this.handleRemove(department._id)
                                                    }}>Remove</button>}</td>                               
                            </tr>                 
                       )
                   }) 
                }
            </tbody>
        </table>





                <h3> Add Department </h3>
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
        departments:state.departmentsGet,
        department:state.department
        
        
    }
}
export default connect(mapStateToProps)(Departments)

