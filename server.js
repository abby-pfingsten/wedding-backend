const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running on port ${port}`));


// For backend and express
const cors = require("cors");
app.use(express.json());
app.use(cors());

const guestRoutes = require("./routes/guest");


const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://abbypfingsten:q1QVxPKmpLhPD5fF@cluster0.47dfkhh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a new MongoClient
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


app.get("/", (req, resp) => {

    resp.send("App is Working");
    // You can check backend is working or not by 
    // entering http://loacalhost:5000
    
    // If you see App is working means
    // backend working properly
});

app.use("/api/", guestRoutes);
module.exports = app;





