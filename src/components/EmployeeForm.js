import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { View } from "./View";

// getting the values of local storage
const getDatafromLS=()=>{

    const data = localStorage.getItem('employees');
    
    // converting data
    if(data){
      return JSON.parse(data);
    }
    else{
      return []
    }
  }


const EmployeeForm = () => {
  
    const [employees, setEmployees]=useState(getDatafromLS());
  
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [idnumber, setIdNumber] = useState('');
    const [position, setPosition] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    
  
    const handleAddEmployeeSubmit=(e)=>{
      e.preventDefault();
  
      let employee={
        name,
        surname,
        idnumber,
        position,
        contact,
        email
      }
  
      setEmployees([...employees,employee]);
      setName('');
      setSurname('');
      setIdNumber('');
      setPosition('');
      setContact('');
      setEmail('');
    }
  
    const deleteEmployee=(name)=>{
      const filteredEmployees=employees.filter((element,index)=>{
        return element.name !== name
      })
      setEmployees(filteredEmployees);
    }
  
    useEffect(()=>{
      localStorage.setItem('employees',JSON.stringify(employees));
    },[employees])
  
    return (
      <div className='wrapper'>
        <h1>Employee Details</h1>
        <p>Please enter employee details below:</p>
        <div className='main'>
  
          <div className='form-container'>
            <form autoComplete="off" className='form-group'
            onSubmit={handleAddEmployeeSubmit}>
              <label>Name:</label>
              <input type="text" className='form-control' required
              onChange={(e)=>setName(e.target.value)} value={name}></input>
              <br></br>
              <label>Surname:</label>
              <input type="text" className='form-control' required
              onChange={(e)=>setSurname(e.target.value)} value={surname}></input>
              <br></br>
              <label>ID Number:</label>
              <input type="number" className='form-control' required
              onChange={(e)=>setIdNumber(e.target.value)} value={idnumber}></input>
              <br></br>
              <label>Position:</label>
              <input type="text" className='form-control' required
              onChange={(e)=>setPosition(e.target.value)} value={position}></input>
              <br></br>
              <label>Contact:</label>
              <input type="text" className='form-control' required
              onChange={(e)=>setContact(e.target.value)} value={contact}></input>
              <br></br>
              <label>Email:</label>
              <input type="email" className='form-control' required
              onChange={(e)=>setEmail(e.target.value)} value={email}></input>
              <br></br>
              <button type="submit" className='btn-submit'>
                ADD
              </button>
            </form>
          </div>
  
          <div className='view-container'>
            {employees.length>0&&<>
              <div className='table-responsive'>
                <table className='table'>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Surname</th>
                      <th>ID #</th>
                      <th>Email</th>
                      <th>Position</th>
                      <th>Contact</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <View employees={employees} deleteEmployee={deleteEmployee}/>
                  </tbody>
                </table>
              </div>
              <button className='btn-remove-all'
              onClick={()=>setEmployees([])}>Remove All</button>
            </>}
            {employees.length < 1 && <div className='employeeList'>No employees on the database</div>}
          </div>
  
        </div>
      </div>
    )
}
 
export default EmployeeForm;