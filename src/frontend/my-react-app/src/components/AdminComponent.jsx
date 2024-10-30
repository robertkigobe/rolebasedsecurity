import React, { useEffect, useState } from 'react';

const AdminComponent = () => {
    const [data, setData] = useState('');

    useEffect(() => {
        fetch('/admin')
            .then(response => response.text())
            .then(text => setData(text))
            .catch(error => console.error('Error fetching admin data:', error));
    }, []);

    return (
        <div>
            <h2>Admin Page</h2>
            <p>{data}</p>
        </div>
    );
};

export default AdminComponent;