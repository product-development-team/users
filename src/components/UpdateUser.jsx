import { Modal, Form, Button } from "react-bootstrap";
import { useState } from "react";

const UpdateUser = ({ modal, updateUser, setModal, user }) => {

  const [currentUser, setcurrentUser] = useState({
    id: user.id,
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    avatar: user.avatar,
    birthdate: user.birthdate,
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;

    setcurrentUser({ ...user, [name]: value });

    // {
    //   id: null,
    //   firstname: "",
    //   lastname: "",
    //   email: "",
    //   avatar: "",
    //   birthdate: ""
    // }
    // firstname: "Foo bar"
    //
    // becomes:
    // {
    //   id: null,
    //   firstname: "Foo bar",
    //   lastname: "",
    //   email: "",
    //   avatar: "",
    //   birthdate: ""
    // }
  };



  const onSubmit = (e) => {
    e.preventDefault();
    // custom validation
    if (!user.firstname || ! user.lastname) return;
    updateUser(user.id, currentUser);
  };

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>{modal.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              name="firstname"
              onChange={onInputChange}
              defaultValue={user.firstname}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last Name"
              name="lastname"
              onChange={onInputChange}
              defaultValue={user.lastname}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Email"
              name="email"
              onChange={onInputChange}
              defaultValue={user.email}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Avatar URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Avatar URL"
              name="avatar"
              onChange={onInputChange}
              defaultValue={user.avatar}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Birth date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Birth date"
              name="birthdate"
              onChange={onInputChange}
              defaultValue={user.birthdate}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setModal({ active: false })}>
          Close
        </Button>
        <Button variant="primary" onClick={onSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </>
  );
};

export default UpdateUser;
