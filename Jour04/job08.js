const readline = require('readline');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/LaPlateforme', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const studentSchema = new mongoose.Schema({
  id: Number,
  lastname: String,
  firstname: String,
  students_number: Number,
  year_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Year' }
});

const Student = mongoose.model('Student', studentSchema);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter student ID to update: ', (studentId) => {
  rl.question('Enter new year ID: ', (newYearId) => {
    Student.updateOne({ _id: studentId }, { year_id: newYearId }, (err, result) => {
      if (err) {
        console.error(err);
      } else {
        console.log(result);
      }
      rl.close();
    });
  });
});
