import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Container, Row, Col, Modal } from "react-bootstrap";
import DataTable from "./DataTable";
import Loader from "./Loader";
import Search from "./Search";
import CreateUser from "./CreateUser";
import UpdateUser from "./UpdateUser";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState({ name: "", active: false });

  const fetchUsers = async () => {
    setLoading(true);

    try {
      const res = await axios.get(
        "https://632e1123b37236d2ebe5af2c.mockapi.io/users"
      );

      setUsers(res.data);
    } catch (err) {
      console.error("Error fetching users", err);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  };

  const createUser = async (user) => {
    setModal({ active: false });
    setLoading(true);

    try {
      const res = await axios.post(
        "https://632e1123b37236d2ebe5af2c.mockapi.io/users",
        user
      );

      setUsers([...users, res.data]);
    } catch (err) {
      console.error("Error creating user", err);
    } finally {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
  };

  const deleteUser = async (id) =>{
    setModal({ active: false });
    setLoading(true);

    try{
        await axios.delete(`https://632e1123b37236d2ebe5af2c.mockapi.io/users/${id}`)
        const filterUsers = users.filter((user) => user.id !== id)
        setUsers(filterUsers)
    }catch{
        console.log("some error with deleting")
    }finally {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
  }

  const updateUser = async (id, user) =>{
    setModal({active: false });
    setLoading(true);

    try{
        await axios.put(`https://632e1123b37236d2ebe5af2c.mockapi.io/users/${id}`, user);
        
        
        setUsers()
    }catch{
        console.log("some error with deleting")
    }finally {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
  

  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Row className="mb-3">
            <Col className="text-start">
              <Search />
            </Col>

            <Col className="text-end">
              <Button
                onClick={() => setModal({ name: "Create User", active: true })}
              >
                Create New User
              </Button>
            </Col>
          </Row>

          <DataTable users={users} deleteUser={deleteUser} updateUser={updateUser} modal={modal} setModal={setModal}/>
        </>
      )}

      {modal.active && (
        <Modal show={modal.active} onHide={() => setModal({ active: false })}>
          {modal.name === "Create User" ? 
            <CreateUser modal={modal} setModal={setModal} createUser={createUser}  />
            : <UpdateUser modal={modal} setModal={setModal} updateUser={updateUser}/>
          }
        </Modal>
      )}
    </Container>
  );
};

export default Users;
