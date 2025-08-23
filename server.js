// server install
const {MongoClient} =require('mongodb');
const uri='mongodb://localhost:27017';
const client= new MongoClient(uri);

//express install
const express= require('express');
const cors=require('cors');
const app=express();
app.use(cors());
app.use(express.json());

// CRUD operations
app.post('/user',async (req,res)=>{
    try{
        await client.connect();
        await post_values(req.body);
        res.status(200).send({ message: "Inserted", id: result.insertedId });
    }catch(err){
        res.status(500).send({ error: "Database insert failed" });
    }
});


// functions
async function post_values(requst){
        try{
            const db=await client.db('test');
            const collection=await db.collection('form');
            await collection.insertOne(requst);
    }catch(e){
        console.error('error ocureed in logic run ',e);
    }
};

app.listen(3000,()=>{
    console.log('now server can accept req from http://localhost:3000');
});