const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//define Draft schema model
const DraftSchema = new Schema({
    //don't worry about this
    draft:{
        type:String,
        index: true
    }
});


module.exports = mongoose.model('Draft', DraftSchema);