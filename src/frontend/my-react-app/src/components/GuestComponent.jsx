import React, { useEffect, useState } from 'react';

const GuestComponent = () => {
    const [data, setData] = useState('');

    useEffect(() => {
        fetch('/guest')
            .then(response => response.text())
            .then(text => setData(text))
            .catch(error => console.error('Error fetching guest data:', error));
    }, []);

    return (
        <div>
            <h2>Guest Page</h2>
            <p>{data}</p>
        </div>
    );
};

export default GuestComponent;