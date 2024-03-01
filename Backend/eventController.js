// const Event = require('../models/Event');

// exports.hostEvent = async (req, res) => {
//   try {
//     const { name, date, venue, participantLimit, shortDescription, detailedDescription } = req.body;

//     const newEvent = new Event({ 
//       name, 
//       date, 
//       venue,
//       participantLimit,
//       shortDescription,
//       detailedDescription
//     });

//     await newEvent.save();

//     res.status(201).json({ success: true, event: newEvent });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// };

// exports.getAllEvents = async (req, res) => {
//   try {
//     const events = await Event.find({});
//     res.status(200).json({ success: true, events });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// };

// exports.updateEvent = async (req, res) => {
//   try {
//     const { name, date, venue, participantLimit, shortDescription, detailedDescription } = req.body;
//     const eventId = req.params.eventId;

//     const updatedEvent = await Event.findByIdAndUpdate(
//       eventId,
//       { 
//         name, 
//         date, 
//         venue,
//         participantLimit,
//         shortDescription,
//         detailedDescription
//       },
//       { new: true }
//     );

//     if (!updatedEvent) {
//       return res.status(404).json({ success: false, message: 'Event not found' });
//     }

//     res.status(200).json({ success: true, event: updatedEvent });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// };

// exports.deleteEvent = async (req, res) => {
//   try {
//     const eventId = req.params.eventId;

//     const deletedEvent = await Event.findByIdAndDelete(eventId);

//     if (!deletedEvent) {
//       return res.status(404).json({ success: false, message: 'Event not found' });
//     }

//     res.status(200).json({ success: true, event: deletedEvent });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// };

const express = require('express');
const mongoose = require('mongoose');
const Event = require('./Event');

// Create an instance of Express app
const app = express();
const mongoURL="mongodb+srv://Nasibodula:wogesake2024@cluster0.6sdxs5n.mongodb.net/host_event?retryWrites=true&w=majority&appName=Cluster0"
// Connect to MongoDB database
mongoose.connect(mongoURL);
const db = mongoose.connection;

// Check database connection
db.once('open', () => {
  console.log('Connected to the database');
});

// Handle potential database connection error
db.on('error', (error) => {
  console.error('Database connection error:', error);
});

// Middleware to parse JSON request bodies
app.use(express.json());

// Route to host an event
app.post('/api/events', async (req, res) => {
  try {
    // Extract event details from request body
    const { name, date, venue, participantLimit, shortDescription, detailedDescription } = req.body;

    // Create a new Event document
    const newEvent = new Event({ 
      name, 
      date, 
      venue,
      participantLimit,
      shortDescription,
      detailedDescription
    });

    // Save the new event to the database
    await newEvent.save();

    // Respond with success message and the newly created event
    res.status(201).json({ success: true, event: newEvent });
  } catch (error) {
    // Handle any errors and respond with an error message
    console.error('Error hosting event:', error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});