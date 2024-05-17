const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  firstname: {
    type: String,
    required: true
  },
  student_number: {
    type: String,
    required: true
  },
  year_id: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Student', studentSchema);
