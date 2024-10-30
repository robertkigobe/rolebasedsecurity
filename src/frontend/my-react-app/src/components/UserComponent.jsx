import React, { useEffect, useState } from 'react';

const UserComponent = () => {
    const [data, setData] = useState('');

    useEffect(() => {
        fetch('/user')
            .then(response => response.text())
            .then(text => setData(text))
            .catch(error => console.error('Error fetching user data:', error));
    }, []);

    return (
        <div>
            <h2>User Page</h2>
            <p>{data}</p>
        </div>
    );
};

export default UserComponent;