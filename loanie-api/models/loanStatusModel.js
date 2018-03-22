const mongoose = require('mongoose');

const LoanStatusSchema = new mongoose.Schema({
  loanId: {
    type: String,
    required: true
  }
  currentStatus: {
    type: String,
    required: true
  },
  startTimestamp: {
    type: String,
    required: true
  },
  endTimestamp: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('LoanStatus', LoanStatusSchema);