const mongoose = require('mongoose');
const { Schema } = mongoose;

const CategoriesSchema = new Schema({
    uid:{
        type: String,
        required: true
    },
    questions:{
        type: String,
        required: true
    },
    category: {
        type: Array,
        required: true
    },
    item: {
        type: Array,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const CategoriesModel = mongoose.model('Categories', CategoriesSchema);

module.exports = CategoriesModel;
