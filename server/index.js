const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

// middleware
app.use(cors());
app.use(express.json());


const uri = process.env.MONGODB_URL;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try{
        await client.connect();
        const booksCollection = client.db('vertexBooks').collection('books');
        const photosCollection = client.db('vertexBooks').collection('photos');

        app.get('/inventory', async(req, res)=>{
            const query = {};
            const cursor = booksCollection.find(query);
            const books = await cursor.toArray();
            res.send(books);
        });

        app.get('/inventory/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const books = await booksCollection.findOne(query);
            res.send(books);
        });

        app.put('/inventory/:id', async (req, res) => {
            const id = req.params.id;
            const updateQuantity = req.body;
            const filter = {_id: ObjectId(id)};
            const options = {upsert: true};
            const updateDoc = {
                $set: {
                    quantity: updateQuantity.number
                }
            };
            const result = await booksCollection.updateOne(filter, updateDoc, options);
            res.send(result);
        });

        app.delete('/inventory/:id', async (req, res) =>{
            const id = req.params.id;
            const query = {_id: ObjectId(id)};
            const result = await booksCollection.deleteOne(query);
            res.send(result)
        });

        app.post('/items', async(req, res) =>{
            const addItem = req.body;
            const result = await booksCollection.insertOne(addItem);
            res.send(result)
        });

        app.get('/items', async(req, res)=>{
            const email = req.query.email;
            const query = { email: email };
            const cursor = booksCollection.find(query);
            const items = await cursor.toArray();
            res.send(items);
        });

        app.get('/photos', async(req, res)=>{
            const query = {};
            const cursor = photosCollection.find(query);
            const photos = await cursor.toArray();
            res.send(photos);
        });
        
    }
    finally{}
};
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('hello world')
});

app.listen(port, ()=>{
    console.log(`Server is running at ${port}`);
});