import React, { useRef } from 'react';

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
        <div>
            <h2>Please Add User Information</h2>
            <form onSubmit={handleAddUser}>
                <input type="text" placeholder="name" ref={nameRef} />
                <br /><br />
                <input type="email" placeholder="email" ref={emailRef} />
                <br /><br />
                <input type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddUsers;