import React, { useEffect, useState } from 'react';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://ghostly-shadow-96316.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])
    return (
        <div>
            <h2>This is Users Data:{users.length}</h2>
            <div>
                {
                    users.map(user => <div key={user._id}>
                        <h4>Name:{user.name}</h4>
                        <h5>Email:{user.email}</h5>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default Users;