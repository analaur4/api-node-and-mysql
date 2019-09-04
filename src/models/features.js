const mongoose = require('mongoose');

const featuresSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    format: {
        type: Enumerator('string', 'number', 'enumerator', 'boolean', 'dateTime', 'timeSpan'),
        required: true
    },
    isRequired: {
        type: Boolean,
        required: true
    },
    validator: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Features', featuresSchema, 'features');
