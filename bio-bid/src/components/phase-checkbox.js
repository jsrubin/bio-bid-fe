import React, {Component} from "react";
import styled from "styled-components";
import CheckBox from "./checkbox";


class Checkboxes extends Component{
    constructor (props){
        super (props)
        this.state ={
            Phases: [
                {id: 1, value: "I", isChecked: false},
                {id: 2, value: "II", isChecked: false},
                {id: 3, value: "III", isChecked: false},
                {id: 4, value: "All", isChecked: false},
            ]
        }
       
    }
    
    handleAllChecked = (event) => {
        let Phases = this.state.Phases
        Phases.forEach(phase => phase.isChecked = event.target.checked) 
        this.setState({Phases: Phases})
      }
    
      handleCheckChieldElement = (event) => {
        let Phases = this.state.Phases
        Phases.forEach(phase => {
           if (phase.value === event.target.value)
              phase.isChecked =  event.target.checked
        })
        this.setState({Phases: Phases})
      }
    
      render() {
        return (
          <div className="checkboxes-phase">
          <h1> Phase</h1>
            <ul>
            {
              this.state.Phases.map((phase) => {
                return (<CheckBox key={phase.id} handleCheckChieldElement={this.handleCheckChieldElement}  {...phase} />)
              })
            }
            </ul>
          </div>
        );
      }
    }

export default Checkboxes;