const mongoose = require('mongoose');

// Define the Event schema
const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  venue: { type: String, required: true },
  participantLimit: { type: Number, required: true },
  shortDescription: { type: String, required: true },
  detailedDescription: { type: String, required: true }
});

// Create the Event model
const Event = mongoose.model('Event', eventSchema);

module.exports = Event;