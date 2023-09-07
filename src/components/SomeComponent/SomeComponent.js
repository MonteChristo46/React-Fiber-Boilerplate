// SomeComponent.js
import React, { useContext } from 'react';
import DataContext from '../../contexts/DataContext';

const SomeComponent = () => {
    const { data, loading } = useContext(DataContext);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {/* Render your data here */}
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default SomeComponent;
