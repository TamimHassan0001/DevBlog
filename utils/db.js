const mongoose = require("mongoose");

//Mongodb Connection
module.exports = connectToMongo = async () => {
  try {
    const conn = await mongoose.connect(
      'mongodb://localhost:27017/devblog'
    );
    console.log(`Connection Success`);
  } catch (e) {
    console.log(`Connection Error: ${e}`);
  }
};
