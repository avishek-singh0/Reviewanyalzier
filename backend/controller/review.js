
const HotelReview = require('../model/review');
// controllers/reviewController.js

 // Import the HotelReview model

exports.createReview = async (req, res) => {
  try {
    // Extract data from the request body
    const {
      review,
      ServiceQuality,
      RoomQuality,
      LocationAndAccessibility,
      ValueForMoney,
      DiningAndFacilities,
      SafetyAndSecurity,
      BookingAndReservationExperience
    } = req.body;

    // Create a new review using the extracted data
    const createdReview = await HotelReview.create({
      review,
      ServiceQuality,
      RoomQuality,
      LocationAndAccessibility,
      ValueForMoney,
      DiningAndFacilities,
      SafetyAndSecurity,
      BookingAndReservationExperience
    });

    // Respond with the created review and a 201 status code
    res.status(201).json(createdReview);
    // controller/review.js

// Test function export
console.log('createReview function:', exports.createReview);


  } catch (error) {
    // Handle errors and respond with a 400 status code
    console.error('Error creating review:', error);
    res.status(400).json({ message: 'Error creating review', error: error.message });
  }
};


exports.getAllReviews = async (req, res) => {
    try {
      const reviews = await HotelReview.find();
      res.json(reviews);
    } catch (error) {
      console.error('Error fetching reviews:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

/**
 * Fetch a review by ID and filter concerns with probability > 0.5.
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
// exports.getReview = async (req, res) => {
//   try {
//     const reviewId = req.params.id;
//     const review = await HotelReview.findById(reviewId);

//     if (!review) {
//       return res.status(404).json({ message: 'Review not found' });
//     }

//     const filterConcerns = (data) => {
//       const concerns = [
//         { category: 'ServiceQuality', values: data.ServiceQuality },
//         { category: 'RoomQuality', values: data.RoomQuality },
//         { category: 'LocationAndAccessibility', values: data.LocationAndAccessibility },
//         { category: 'ValueForMoney', values: data.ValueForMoney },
//         { category: 'DiningAndFacilities', values: data.DiningAndFacilities },
//         { category: 'SafetyAndSecurity', values: data.SafetyAndSecurity },
//         { category: 'BookingAndReservationExperience', values: data.BookingAndReservationExperience }
//       ];

//       return concerns.flatMap(concern =>
//         Object.entries(concern.values)
//           .filter(([key, value]) => key !== 'probability' && value > 0.5)
//           .map(([key, value]) => ({
//             category: concern.category,
//             concern: key,
//             value
//           }))
//       );
//     };

//     const filteredConcerns = filterConcerns(review);

//     res.json({
//       review: review.review,
//       filteredConcerns
//     });
//   } catch (error) {
//     console.error('Error fetching review:', error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// };
