const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
require("dotenv").config();
console.log(process.env.DB_USER);
//console.log(process.env.DB_PASSWORD)

//middleware
app.use(express.json());
app.use(cors());


const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@jobnest.gqr8y.mongodb.net/?retryWrites=true&w=majority&appName=JobNest`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //create db
    const db = client.db("mernJobNest");
    const jobsCollections = db.collection("demoJobs");

    //post a job
    app.post("/post-job", async (req, res) => {
      const body = req.body;
      body.createAt = new Date();
      const result = await jobsCollections.insertOne(body);
      if (result.insertedId) {
        return res.status(200).send(result);
      } else {
        return res.status(404).send({
          message: "Can't insert ! Try again later",
          status: false,
        });
      }
    });

    //get all job
    app.get("/all-jobs", async (req, res) => {
      const jobs = await jobsCollections.find({}).toArray();
      res.send(jobs);
    });

    // gett single job using id

    const { ObjectId } = require("mongodb");

    app.get("/all-jobs/:id", async (req, res) => {
      const id = req.params.id;
      try {
        const job = await jobsCollections.findOne({ _id: new ObjectId(id) });
        res.send(job);
        console.log(id);
      } catch (error) {
        res.status(500).send({ error: "Error fetching the job" });
      }
    });

    //get jobs by email
    app.get("/myJobs/:email", async (req, res) => {
      const jobs = await jobsCollections
        .find({ postedBy: req.params.email })
        .toArray();
      res.send(jobs);
    });

    //delete a job
    app.delete("/job/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await jobsCollections.deleteOne(filter);
      res.send(result);
    });

    //update a job
    app.patch("/update-job/:id", async(req,res) => {
        const id = req.params.id;
        const jobData = req.body;
        const filter = {_id: new ObjectId(id)};
        const options = { upsert: true };
        const updateDoc = {
            $set: {
              ...jobData
            },
          };

          const result = await jobsCollections.updateOne(filter,updateDoc,options)
          res.send(result)

    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello Developer Your Express Server is Active!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
