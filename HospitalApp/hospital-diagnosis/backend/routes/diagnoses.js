const router = require('express').Router();
let Exercise = require('../models/diagnosis.model');

router.route('/').get((req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const patientname = req.body.patientname;
  const diagnosis = req.body.diagnosis;
  const description = req.body.description;
  const date = Date.parse(req.body.date);
  
  const newExercise = new Exercise({
    patientname,
    diagnosis,
    description,
    date,
  });

  newExercise.save()
  .then(() => res.json('Diagnosis added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Diagnosis deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;