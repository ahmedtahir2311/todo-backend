const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://mongodb:mongodb@cluster0.mby2qj5.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

module.exports = async function connectDb() {
  try {
    const conn = await client.connect();

    const db = client.db("todoapp");
    const collection = db.collection("tasks ");
    // perform actions on the collection object
  } catch (err) {
    console.log(err);
    client.close();
  }
};
