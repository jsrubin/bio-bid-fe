import React from 'react'

export const CheckBox = props => {
    return (
        <div>
      <li>
       <input key={props.id} onChange={props.handleCheckChieldElement} type="checkbox" checked={props.isChecked} /> {props.value}
      </li>
      </div>
    


   
    )
}

export default CheckBox;