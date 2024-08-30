// src/components/ReviewDashboard.js
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ChartComponent from './ChartComponent';

const ReviewDashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:9001/review/metrics'); // Adjust API endpoint as needed
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="error">Error: {error}</p>;
  }

  return (
    <div>
      <ChartComponent data={data} title="Review Metrics" />
    </div>
  );
};

// Optionally define prop types for ReviewDashboard if needed

export default ReviewDashboard;
