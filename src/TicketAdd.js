import React from 'react'
import { connect } from 'react-redux'
import { startPostTicket } from './actions/ticketAddAction'

class TicketAdd extends React.Component{
    constructor(){
        super()
        this.state= {
            code  : '',
            customer : '',
            department : '',
            employee : '',
            priority : '',
            message : ''
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
     
        return this.props.history.push('/tickets')
    }

     const customerTemp = this.props.customers.find(cust=> cust.name === this.state.customer)
     const departmentTemp = this.props.departments.find(dept=> dept.name === this.state.department)
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
     this.props.dispatch(startPostTicket(ticketData,redirect))
     console.log('ticketData', ticketData)    
}

    render(){
        console.log(this.state) 
        const employees = this.props.employees.filter(emp => emp.department.name === this.state.department)        
        return (
            <div>
                <h1> Add Ticket </h1>
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
        employees : state.employees                
    }
}

export default connect(mapStateToProps)(TicketAdd)

