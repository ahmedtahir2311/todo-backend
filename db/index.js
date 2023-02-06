// // const { MongoClient, ServerApiVersion } = require("mongodb");
// // const uri = `mongodb+srv://mongodb:mongodb@cluster0.mby2qj5.mongodb.net/?retryWrites=true&w=majority`;

// // const client = new MongoClient(uri, {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// //   serverApi: ServerApiVersion.v1,
// // });

// // module.exports = async function connectDb() {
// //   try {
// //     const conn = await client.connect();

// //     const db = client.db("todoapp");
// //     const collection = db.collection("tasks ");
// //     // perform actions on the collection object
// //   } catch (err) {
// //     console.log(err);
// //     client.close();
// //   }
// // };

// // ************** Another way with mongoose ******************

// // mongoose.connect(uri, options, function(error) {
// //     // Check error in initial connection. There is no 2nd param to the callback.
// //   });

// const mongoose = require("mongoose");

// const errorHandler = (err) => {
//   console.log("Error Establising Connection", err);
// };

// module.exports = establishConnection = async () => {
//   try {
//     await mongoose.connect("");
//     console.log("Connection Made with Db");

//     //Listening to error after connection is made
//     mongoose.connection.on("error", errorHandler(err));
//   } catch (error) {
//     errorHandler(error);
//   }
// };
