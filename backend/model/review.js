const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// Define the schema for the hotel review
const hotelReviewSchema = new mongoose.Schema({
  review: {
    type: String,
    required: true,
  },
  ServiceQuality: {
    probability: { type: Number, required: true },
    overall_rating: { type: Number, required: true },
    StaffAttitude: { type: Number, required: true },
    CustomerService: { type: Number, required: true },
    StaffService: { type: Number, required: true },
    StaffAssistance: { type: Number, required: true }, },

  RoomQuality: {
    probability: { type: Number, required: true },
    overall_rating: { type: Number, required: true },
    Cleanliness: { type: Number, required: true },
    RoomCondition: { type: Number, required: true },
    ComfortOfBedsAndPillows: { type: Number, required: true },
    RoomSize: { type: Number, required: true },
    BathroomSize: { type: Number, required: true },
    RoomSizeVariability: { type: Number, required: true },
    HeatingIssues: { type: Number, required: true },
  },
  LocationAndAccessibility: {
    probability: { type: Number, required: true },
    overall_rating: { type: Number, required: true },
    Location: { type: Number, required: true },
    SafeWalkingAreas: { type: Number, required: true },
    PublicTransportationAccess: { type: Number, required: true },
  },
  ValueForMoney: {
    probability: { type: Number, required: true },
    overall_rating: { type: Number, required: true },
    ValueForMoney: { type: Number, required: true },
  },
  DiningAndFacilities: {
    probability: { type: Number, required: true },
    overall_rating: { type: Number, required: true },
    BreakfastBuffet: { type: Number, required: true },
    NearbyDiningOptions: { type: Number, required: true },
    ConvenientHotelDining: { type: Number, required: true },
    LobbyBar: { type: Number, required: true },
  },
  SafetyAndSecurity: {
    probability: { type: Number, required: true },
    overall_rating: { type: Number, required: true },
    SafetyAndSecurity: { type: Number, required: true },
    RoomSafety: { type: Number, required: true },
  },
  BookingAndReservationExperience: {
    probability: { type: Number, required: true },
    overall_rating: { type: Number, required: true },
    BookingExperience: { type: Number, required: true },
    BookingDirectlyWithHotel: { type: Number, required: true },
    OnlineCheckinProcess: { type: Number, required: true },
  }
});






// Create the model from the schema
const HotelReview = mongoose.model('HotelReview', hotelReviewSchema);

module.exports = HotelReview;
