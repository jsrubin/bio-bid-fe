import React, {Component} from "react";
import styled from "styled-components";
import CheckBoxStatus from "./forstatuscheckbox";




class StatusCheckboxes extends Component{
    constructor (props){
        super (props)
        this.state ={
            Status: [
                {id: 1, value: "Open", isChecked: false},
                {id: 2, value: "Active", isChecked: false},
                {id: 3, value: "Closed", isChecked: false},
                {id: 4, value: "All", isChecked: false},
            ]
        }
       
    }
    
    handleAllChecked = (event) => {
        let Status = this.state.Status
        Status.forEach(status=> status.isChecked = event.target.checked) 
        this.setState({Status: Status})
      }
    
      handleCheckChieldElement = (event) => {
        let Status = this.state.Status
        Status.forEach(status => {
           if (status.value === event.target.value)
           status.isChecked =  event.target.checked
        })
        this.setState({Status: Status})
      }
    
      render() {
        return (
          <div class="checkboxes-status">
          <h1> Status</h1>
            <ul>
            {
              this.state.Status.map((status) => {
                return (<CheckBoxStatus handleCheckChieldElement={this.handleCheckChieldElement}  {...status} />)
              })
            }
            </ul>
          </div>
        );
      }
    }

    
    
    
    
    


export default StatusCheckboxes;