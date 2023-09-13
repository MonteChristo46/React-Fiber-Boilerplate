// DataProvider.js
import React, { useState, useEffect } from 'react';
import DataContext from './DataContext';

const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("Request out")
                let response = await fetch('/data');
                console.log(response)
                if (!response.ok) {
                    throw new Error(`Response not OK: ${response.status} ${response.statusText}`);
                  }
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
