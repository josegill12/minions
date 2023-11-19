const mongoose = require("../db/connection");

const tripSchema = new mongoose.Schema({
  title: String,
  overview: {
    destination: String,
    dates: String,
    duration: String,
    travelCompanions: [String],
  },
  accommodation: {
    lodging: String,
    bookingConfirmationNumbers: [String],
    checkInCheckOutTimes: String,
  },
  transportation: {
    mode: String,
    transportationConfirmationNumbers: [String],
    departureArrivalTimes: String,
  },
  itinerary: [
    {
      day: String,
      activities: [String],
    },
  ],
  restaurantsAndDining: [String],
  packingList: [String],
  budget: {
    totalBudget: String,
    expenses: {
      accommodation: String,
      transportation: String,
      meals: String,
      activities: String,
      emergencyFunds: String,
    },
  },
  importantContacts: {
    emergencyContact: String,
    localContacts: [String],
  },
  travelInsurance: {
    policyNumber: String,
    coverageDetails: String,
  },
  healthAndSafety: {
    healthPrecautions: [String],
    safetyTips: [String],
  },
  notesAndReminders: String,
});

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;