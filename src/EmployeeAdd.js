import React from 'react'
import { connect } from 'react-redux'
import { startPostEmployee } from './actions/employeeAddAction'

class EmployeeAdd extends React.Component{
    constructor(){
        super()
        this.state= {
            name : '',
            email : '',
            mobile : '',
            department :''
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
     
        return this.props.history.push('/employees')
    }
    const departmentTemp = this.props.departments.find(dept=> dept.name === this.state.department)
    const employeeData ={
        "name" : this.state.name,
        "email" : this.state.email,
        "mobile" : this.state.mobile,
        "department" : departmentTemp._id
    }
     this.props.dispatch(startPostEmployee(employeeData,redirect))    
}

    render(){
        console.log(this.state.department)
        const departmentTemp = this.props.departments.find(dept=> dept.name === this.state.department)
        return (
            <div>
                <h1> Add Employee </h1>
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

                    <label htmlFor= 'department'>Department</label>   
                    <select  id ='department' name = 'department' value={this.state.department} onChange={this.handleChange}>
                        <option value =''>--select--</option>
                        {
                            this.props.departments.map(department=> {
                                return(
                            
                                 <option  value={department.name}>{department.name} </option>
                                )
                           })
                        }
                        </select>
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
        departments:state.departmentsGet        
    }
}
export default connect(mapStateToProps)(EmployeeAdd)

