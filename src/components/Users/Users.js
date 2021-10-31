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
                    users.map(user => <li
                        key={user._id}
                    >{user.name}:: {user.email}</li>)
                }
            </div>
        </div>
    );
};

export default Users;