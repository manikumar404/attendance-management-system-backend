const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://mani:mani123@cluster0.xycbo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  //client.close();
  console.log(err)
});