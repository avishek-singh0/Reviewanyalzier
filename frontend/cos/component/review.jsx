import React, { useState, useEffect } from 'react';
import './AllReviews.css'; // Import the CSS file for styling

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('http://localhost:9001/review/reviews'); // Adjust the URL if necessary
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        setError('Failed to fetch reviews. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="review-container">
      <h1 className="review-header">All Reviews</h1>
      {reviews.length === 0 ? (
        <div className="no-reviews">No reviews found.</div>
      ) : (
        <div className="review-table-wrapper">
          <table className="review-table">
            <thead>
              <tr>
                <th>Review ID</th>
                <th>Review</th>
                <th>Service Quality</th>
                <th>Room Quality</th>
                <th>Location</th>
                <th>Value for Money</th>
                <th>Dining & Facilities</th>
                <th>Safety & Security</th>
                <th>Booking Experience</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review) => (
                <tr key={review._id}>
                  <td>{review._id}</td>
                  <td>{review.review}</td>
                  <td>{review.ServiceQuality.overall_rating}</td>
                  <td>{review.RoomQuality.overall_rating}</td>
                  <td>{review.LocationAndAccessibility.overall_rating}</td>
                  <td>{review.ValueForMoney.overall_rating}</td>
                  <td>{review.DiningAndFacilities.overall_rating}</td>
                  <td>{review.SafetyAndSecurity.overall_rating}</td>
                  <td>{review.BookingAndReservationExperience.overall_rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllReviews;
