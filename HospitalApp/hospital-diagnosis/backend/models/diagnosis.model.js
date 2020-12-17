const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const diagnosisSchema = new Schema({
  patientname: { type: String, required: true },
  diagnosis: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Diagnosis = mongoose.model('Diagnosis', diagnosisSchema);

module.exports = Diagnosis;