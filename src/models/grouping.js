const mongoose = require('mongoose');

const groupingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Grouping', groupingSchema, 'groupings');
