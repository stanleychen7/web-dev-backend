const express = require('express');
const router = express.Router();

const {Student, Campus} = require('../database/models');
const ash = require('express-async-handler');

//Get all campus
router.get('/', ash(async(req, res) => {
    let campuses = await Campus.findAll({include: [Student]});
    res.status(200).json(campuses);
}));

//Get campus by ID
router.get('/:id', ash(async(req, res) => {
    let campus = await Campus.findByPk(req.params.id, {include:[Student]});
    res.status(200).json(campus);
}));

//Add a new Campus
router.post('/', ash(async(req,res) => {
    const newCampus = await Campus.create(req.body);
    res.status(201).json(newCampus);
}));

//Edit a campus
router.put('/:id', ash(async(req, res) => {
    await Campus.update(req.body, {
        where: {id: req.params.id}
    });

    let campus = await Campus.findByPk(req.params.id);
    res.status(201).json(campus);
}));

//Delete a campus
router.delete('/:id', ash(async(req, res) => {
    await Campus.destroy({
        where: { id: req.params.id }
    });
    res.status(200).json('Campus deleted');
}));

module.exports = router;