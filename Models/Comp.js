const mongoose = require('mongoose');
const { Schema } = mongoose;

const ComponentsSchema = new Schema({
    
    uid: {
        type: String,
        required: true,
    },
    psg: {
        type: String,
        required: true,
    },

    ques: {
        type: Array,
        required: true,
    },
    
    date: {
        type: Date,
        default: Date.now
    }
});

const Comp = mongoose.model('Components', ComponentsSchema);

module.exports = Comp;
