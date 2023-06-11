import React from 'react'
import Search from './Search'

export const View = ({ employees, deleteEmployee, handleEdit, handleSearch}) => {
    
    return (
        <>
        {employees.map((employee) => (
                    <tr key={employee.name}>
                        <td>{employee.name}</td>
                        <td>{employee.surname}</td>
                        <td>{employee.idnumber}</td>
                        <td>{employee.email}</td>
                        <td>{employee.position}</td>
                        <td>{employee.contact}</td>
                        <td>{employee.image}</td>
                        <td className='edit-btn'  onClick={()=>handleEdit(employee.name)}>EDIT</td>
                        <td className='delete-btn' onClick={()=>deleteEmployee(employee.name)}>DELETE</td>           
                    </tr>    
            ))
        }
        </>
    )
}

export default View;