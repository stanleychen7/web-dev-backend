const express = require('express');
const router = express.Router();
const { Student, Campus } = require('../database/models');
const ash = require('express-async-handler');

// Get all students
router.get('/', ash(async (req, res) => {
  const students = await Student.findAll({ include: [Campus] });
  res.status(200).json(students);
}));

// Get a student by id
router.get('/:id', ash(async (req, res) => {
  const student = await Student.findByPk(req.params.id, { include: [Campus] });
  res.status(200).json(student);
}));

// Add a new student
router.post('/', ash(async (req, res) => {
  const newStudent = await Student.create(req.body);
  res.status(201).json(newStudent);
}));

// Edit student
router.put('/:id', ash(async (req, res) => {
  await Student.update(req.body, { where: { id: req.params.id } });
  const updatedStudent = await Student.findByPk(req.params.id);
  res.status(200).json(updatedStudent);
}));

// Delete a student
router.delete('/:id', ash(async (req, res) => {
  await Student.destroy({ where: { id: req.params.id } });
  res.status(200).json({ message: 'Student deleted' });
}));

module.exports = router;
