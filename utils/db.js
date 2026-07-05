const mongoose = require("mongoose");

//Mongodb Connection
module.exports = connectToMongo = async () => {
  try {
    const conn = await mongoose.connect(
      'mongodb+srv://mohammad:12345678999@devblog.bv8alzl.mongodb.net/?appName=devblog'
    );
    console.log(`Connection Success`);
  } catch (e) {
    console.log(`Connection Error: ${e}`);
  }
};
