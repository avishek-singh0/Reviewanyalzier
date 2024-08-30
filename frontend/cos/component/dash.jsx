// src/components/ChartComponent.js
import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
import axios from 'axios';
import './ChartComponent.css';

const ChartComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from API
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:9001/review/reviews');
        const reviews = response.data;

        // Transform data to separate lines for each service metric
        const transformedData = reviews.map((review, index) => ({
          name: `Review ${index + 1}`,
          serviceQuality: review.ServiceQuality.overall_rating * review.ServiceQuality.probability,
          roomQuality: review.RoomQuality.overall_rating * review.RoomQuality.probability,
          location: review.LocationAndAccessibility.overall_rating * review.LocationAndAccessibility.probability,
          valueForMoney: review.ValueForMoney.overall_rating * review.ValueForMoney.probability,
          dining: review.DiningAndFacilities.overall_rating * review.DiningAndFacilities.probability,
          safety: review.SafetyAndSecurity.overall_rating * review.SafetyAndSecurity.probability,
          booking: review.BookingAndReservationExperience.overall_rating * review.BookingAndReservationExperience.probability
        }));

        setData(transformedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="chart-container">
      <h2 className="chart-title">Review Metrics</h2>
      <LineChart width={1200} height={600} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="serviceQuality" stroke="#8884d8" name="Service Quality" />
        <Line type="monotone" dataKey="roomQuality" stroke="#82ca9d" name="Room Quality" />
        <Line type="monotone" dataKey="location" stroke="#ffc658" name="Location" />
        <Line type="monotone" dataKey="valueForMoney" stroke="#ff7300" name="Value for Money" />
        <Line type="monotone" dataKey="dining" stroke="#d0ed57" name="Dining" />
        <Line type="monotone" dataKey="safety" stroke="#a4de6c" name="Safety" />
        <Line type="monotone" dataKey="booking" stroke="#cma400" name="Booking" />
      </LineChart>
    </div>
  );
};

export default ChartComponent;
