const express = require('express');
const router = express.Router();
const studentController = require('./controller');

router.get('/etudiants', studentController.getAllStudents);
router.get('/etudiant/:id', studentController.getStudentById);
router.post('/etudiants', studentController.addStudent);
router.delete('/etudiant/:id', studentController.deleteStudent);

module.exports = router;
