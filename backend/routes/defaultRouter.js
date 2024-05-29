const express = require('express')
const router = express.Router()

data = [
  {
    name: 'make an apointment with an urologist',
    description: '',
    creationDate: '17.05.2024',
    dueDate: '24.05.2024'
  },
  {
    name: 'learn how to work on stock market',
    description: 'Sparkasse send an invitation which micht be of interest, besides investing in ETC might be a good idea',
    creationDate: '17.05.2024',
    dueDate: '01.06.2024'
  },
  {
    name: 'seach for a job',
    description: 'research what possitions are open on the market which might help in future to get a freelance jobs / work remote full-time',
    creationDate: '17.05.2024',
    dueDate: '21.05.2024'
  },
  {
    name: 'Coursera apply for refund',
    description: 'send all necessary documents at work so to get full refund',
    creationDate: '17.05.2024',
    dueDate: '21.05.2024'
  }
]

router.get('/', (req, res) => {
  res.json(data);
})

module.exports = router