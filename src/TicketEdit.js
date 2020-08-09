import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { startPutTicket } from './actions/ticketAddAction'
import {Redirect } from 'react-router-dom'

class TicketEdit extends React.Component{
    constructor(props){
        super()
        this.state= {
            code  : props.ticket.code,
            customer : props.ticket.customer,
            department : props.ticket.department,
            employee : props.ticket.employee,
            priority : props.ticket.priority,
            message : props.ticket.message,

        }
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handlePriority =(priority) => {
        this.setState({priority})
    }

    handleSubmit = (e)=>{
     e.preventDefault()
     console.log(this.state)
    const redirect=()=>{
     
        return this.props.history.push(`/tickets/${this.props.ticket._id}`)
    }

    const customerTemp = this.props.customers.find(cust=> cust.name === this.state.customer)
     const departmentTemp = this.props.departments.find(dept=> dept.name === this.state.department)
     //console.log('departmentTemp',departmentTemp)
     const employees = this.props.employees.filter(emp => emp.department.name === this.state.department)
     const res =employees.map(emp=>emp._id)
         const result = []

         for(const ele of res) {
             result.push({"_id" : ele})
         }
            console.log('result', result)



    const ticketData ={
        "code" : this.state.code,
        "customer" : customerTemp._id,        
        "department" : departmentTemp._id,
        "employees" : result,
        "priority" : this.state.priority,
        "message" :  this.state.message
    }
    console.log('ticketEdit', ticketData)
     this.props.dispatch(startPutTicket(this.props.ticket._id, ticketData,redirect))
     
    
}



    render(){
       // console.log(this.state)
        //const departmentTemp = this.props.departments.find(dept=> dept.name === this.state.department)
      //  console.log('departmentTemp',departmentTemp)
         const employees = this.props.employees.filter(emp => emp.department.name === this.state.department)
         

        // console.log('employees', employees)
        // console.log('result', result)
        return (
            <div>
                <h1> Edit Ticket </h1>
                <form onSubmit = {this.handleSubmit}>
                    <label htmlFor= 'code'>Code</label>   
                    <input type ='text' id ='code' name ='code' value = { this.state.code} onChange= {this.handleChange}/>
                    <br/>
                    <br/>

                    <label htmlFor= 'customer'>Customer</label>   
                    <select  id ='customer' name = 'customer' value={this.state.customer} onChange={this.handleChange}>
                        <option value =''>--select--</option>
                        {
                            this.props.customers.map(customer=> {
                                return(
                            
                                 <option  value={customer.name}>{customer.name} </option>
                                )
                           })
                        }
                        </select>
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

                     <label htmlFor= 'employee'>employee</label>   
                    <select  id ='employee' name = 'employee' value={this.state.employee} onChange={this.handleChange}>
                        <option value =''>--select--</option>
                        {
                            employees.map(employee=> {
                                return(
                            
                                 <option  value={employee.name}>{employee.name} </option>
                                )
                           })
                        }
                        </select>
                     <br/>
                     <br/>


                     <label htmlFor= 'message'>Message</label>                      
                     <textarea id ='message' name ='message' value={this.state.message} onChange={this.handleChange}></textarea>
                     <br/>
                     <br/>
                      

                     <h3> Priority </h3>
                                    <input 
                                       type='radio'
                                       name= 'priority'
                                       id='priorityH'
                                       value= {this.state.priority}
                                       onChange={() => {
                                           this.handlePriority('high')
                                       }}
                                       checked ={this.state.priority == 'high'}
                                       />
                                       <label htmlFor='priorityH' value= 'high'>high</label> <br/> <br/>

                                       <input 
                                       type='radio'
                                       name= 'priority'
                                       id='priorityM'
                                       value= {this.state.priority}
                                       onChange={() => {
                                           this.handlePriority('medium')
                                       }}
                                       checked ={this.state.priority == 'medium'}
                                       />
                                       <label htmlFor='priorityM' value= 'medium'>medium</label> <br/> <br/>

                                       <input 
                                       type='radio'
                                       name= 'priority'
                                       id='priorityL'
                                       value= {this.state.priority}
                                       onChange={() => {
                                           this.handlePriority('low')
                                       }}
                                       checked ={this.state.priority == 'low'}
                                       />
                                       <label htmlFor='priorityL' value= 'low'>low</label> <br/> <br/>

                    <input type ='submit' value='Submit' />

                    </form>
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        customers : state.customers,
        departments:state.departmentsGet,
        employees : state.employees,
        ticket : state.ticket
                
    }
}
export default connect(mapStateToProps)(TicketEdit)

