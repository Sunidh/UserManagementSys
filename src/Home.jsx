import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Home.css'
export default function Home() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, [])
const navigate = useNavigate();

const handleDelete = (id) => {
  const confirm = window.confirm("Would you like to Delete the user?");
  if(confirm){
    axios.delete('https://jsonplaceholder.typicode.com/users/' +id)
    .then(res => {
      console.log("Simulated Response from API:", res.data);
   location.reload();
  })
  .catch(err => console.log(err));
    
    
  }
}
  return (
    <div className='container-fluid bg-light min-vh-100 d-flex flex-column justify-content-center align-items-center'>
      <h1 className='text-center mb-4'>User Management Application</h1>
      <div className='col-lg-10 col-md-10 col-sm-12 rounded bg-white border shadow p-4'>
        <div className='d-flex justify-content-between mb-3'>
          <h4>User Details</h4>
          <Link to="/create" className='btn btn-success '>Add +</Link>
        </div>
        <div className='table-responsive'>
          <table className='table table-striped'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((d, i) => (
                  <tr key={i}>
                    <td>{d.id}</td>
                    <td>{d.name}</td>
                    <td>{d.email}</td>
                    <td>{d.phone}</td>
                    <td>
                      <Link to={`/read/${d.id}`}className='btn btn-sm btn-info me-1'>Read</Link>
                      <Link to={`/update/${d.id}`}className='btn btn-sm btn-primary me-1'>Edit</Link>
                      <button 
          onClick={e => handleDelete(d.id)}
                      className='btn btn-sm btn-danger me-2'>Delete</button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>


  )

 
}


