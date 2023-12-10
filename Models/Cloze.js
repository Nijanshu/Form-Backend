const mongoose = require('mongoose');
const { Schema } = mongoose;

const ClozeSchema = new Schema({
    uid: {
        type: String,
        required: true
    },
    preview: {
        type: String,
        required: true
    },
    sentence: {
        type: String,
        required: true,
    },
    selectedword: {
        type: Array,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Cloze = mongoose.model('Cloze', ClozeSchema);

module.exports = Cloze;
