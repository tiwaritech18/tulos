import React, { useEffect, useState } from 'react';
import Data from '../Assets/AllProducts';

const useFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); // Initialize loading as true
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataFromSource = async () => {
      try {
        // Simulate a delay before fetching the data
        // Replace this with your actual data-fetching logic
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setData(Data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    // Call the fetch function
    fetchDataFromSource();
  }, []); // Run once when the component mounts

  return { data, loading, error };
};

export default useFetch;
