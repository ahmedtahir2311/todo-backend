const mongoose = require("mongoose");

const uri = process.env.MONGO_URI;

const errorHandler = (error) => {
  console.error("MongoDB connection error:", error);
};

async function connectToMongoDB() {
  try {
    const connection = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected: ", connection.connection.host);
    connection.on("error", errorHandler);
  } catch (error) {
    () => errorHandler(error);
  }
}

module.exports = {
  connectToMongoDB,
};
