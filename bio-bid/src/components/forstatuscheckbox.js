import React from 'react'

export const CheckBoxStatus = props => {
    return (
        <div>
      <li>
       <input onChange={props.handleCheckChieldElement} type="checkbox" checked={props.isChecked} value={props.value} />
       {props.value}
      </li>
      </div>
    


   
    )
}

export default CheckBoxStatus;