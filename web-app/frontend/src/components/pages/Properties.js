import React from 'react'
import '../pages/styles/Data.css'

const Properties = (props) => {
  return (
    <tr key ={props.key}>
        <td >{props.property}</td>
        <td>{props.type}</td>
        <td>{props.required ? 'Yes' : 'No'}</td>
        <td>{props.desc}</td>

    </tr>
  )
}

export default Properties