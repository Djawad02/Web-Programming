const { MongoClient } = require("mongodb");

const uri ="mongodb://localhost:27017";
const client = new MongoClient(uri);
database="Dania";


//Query1

async function run(){
    try{
    let result = await client.connect();
    db= result.db(database);
    collection = db.collection('RN');
    let dq1 = await collection.find({"borough": "Bronx"}).limit(5).toArray();
    console.log(dq1)
        
    }

    finally{
        await client.close();
    }
}

run();

//Query2

async function run2(){
    try{
    let result = await client.connect();
    db= result.db(database);
    collection = db.collection('RN');
    let dq2 = await collection.find({"borough": "Bronx"}).skip(5).limit(5).toArray();
    console.log(dq2)
        
    }
    //ensures that client will close when you finish/error
    
    finally{
        await client.close();
    }
    
    
}

run2();

//Query3

async function run3(){
    try{
    let result = await client.connect();
    db= result.db(database);
    collection = db.collection('RN');
    let dq3 = await collection.find({grades : { $elemMatch:{"score":{$gt : 90}}}}).toArray();
    console.log(dq3)
        
    }
    //ensures that client will close when you finish/error
    finally{
        await client.close();
    }
}

run3();



//Query 4
async function run4(){
    try{
    let result = await client.connect();
    db= result.db(database);
    collection = db.collection('RN');
    let dq4 = await collection.find({name: /^Wil/},
        {
        "restaurant_id" : 1,
        "name":1,"borough":1,
        "cuisine" :1
        }
        ).toArray();
    console.log(dq4)

        
    }
    //ensures that client will close when you finish/error
    finally{
        await client.close();
    }
}

run4();
