import React from 'react';
import { Table, Button } from "react-bootstrap"

function DataTable( {users, deleteUser, updateUser, modal, setModal} ) {

  setModal({name: "Update User", active: true})

    return (
        <Table striped bordered hover>
      <thead>
        <tr>
          <th></th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Birth date</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {users.length ? (
          users.map((user) => (
            <tr key={user.id}>
              <td className="field-avatar">
                <img src={user.avatar} alt={user.firstname} />
              </td>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.email}</td>
              <td>{user.birthdate}</td>
              <td>
                <Button
                variant="primary"
                user={user}
                onClick={() => setModal({ name: "Update User", active: true })}
                
                >
                  Update
                </Button>{" "}
                <Button 
                variant="danger"
                onClick={() => deleteUser(user.id)}
                >
                  
                  Delete
                </Button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="6">No Record Found!</td>
          </tr>
        )}
      </tbody>
    </Table>
    );
}

export default DataTable;