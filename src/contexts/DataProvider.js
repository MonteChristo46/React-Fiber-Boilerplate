// DataProvider.js
import React, { useState, useEffect } from 'react';
import DataContext from './DataContext';

const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Replace with your FastAPI endpoint URL
        const fetchData = async () => {
            try {
                let response = await fetch('http://0.0.0.0:8543/data');
                let result = await response.json();
                setData(result);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    return (
        <DataContext.Provider value={{ data, loading }}>
            {children}
        </DataContext.Provider>
    );
}

export default DataProvider;
