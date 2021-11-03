import React, { useRef } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import './AddUsers.css';

const AddUsers = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const handleAddUser = e => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;

        const newUser = { name, email };
        fetch('https://ghostly-shadow-96316.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedID) {
                    alert('Successfully Add Your Data.')
                    e.target.reset();
                }
            })
        e.preventDefault();
    }

    return (
        <div className="bg-light border p-5 card-design">
            <h2 className="text-success">Please Add User Information</h2>
            <form onSubmit={handleAddUser}>
                <InputGroup.Text>Full Name</InputGroup.Text>
                <FormControl aria-label="Enter your name" ref={nameRef} />
                <InputGroup.Text>Email</InputGroup.Text>
                <FormControl aria-label="Enter your email" ref={emailRef} />
                <br /><br />
                <Button type="submit" value="Add" variant="primary">ADD</Button>
            </form>
        </div>
    );
};

export default AddUsers;