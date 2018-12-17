const mongoose = require('mongoose');
const config = require('../config/index');
mongoose.connect(config.mongodb_url, {
    useNewUrlParser: true
});

exports.mongoose = mongoose;