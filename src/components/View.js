import React from 'react'

export const View = ({employees,deleteEmployee}) => {
    
    return employees.map(employee=>(
        
        <tr key={employee.name}>
            <td>{employee.name}</td>
            <td>{employee.surname}</td>
            <td>{employee.idnumber}</td>
            <td>{employee.email}</td>
            <td>{employee.position}</td>
            <td>{employee.contact}</td>
            <td className='delete-btn' onClick={()=>deleteEmployee(employee.name)}>DELETE</td>           
        </tr>            
    
))
}
