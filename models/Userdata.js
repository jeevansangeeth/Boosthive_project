const mongoose = require('mongoose');
const { Schema } = mongoose;
const UserdataSchema = new Schema();
UserdataSchema.virtual('postedDatas', {
  ref: 'PostedData',
  localField: '_id',
  foreignField: 'userData',
});

module.exports = mongoose.model('UserData', UserdataSchema, 'userData');