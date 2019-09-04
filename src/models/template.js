const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Template', templateSchema, 'templates');
