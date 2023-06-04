const { MongoClient } = require("mongodb");

const uri ="mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run(){
    try{
        const database = client.db('classtask4');
        const ssd = database.collection('restaurant');
        const query = {name: "Wendy'S"};
        const ssdd = await ssd.findOne(query);
        console.log(ssdd.name);

        
    }
    //ensures that client will close when you finish/error
    finally{
        await client.close();
    }
}



run();


// async function query4()
// {  
//     let result = await client.connect();
//     db= result.db(database);
//     collection = db.collection('Fumi');
//     let dataofquery4 = await collection.find({name: /^Wil/},
//         {
//         "restaurant_id" : 1,
//         "name":1,"borough":1,
//         "cuisine" :1
//         }
//         ).toArray();
//     console.log(dataofquery4)
// }
// query4()

// let result = await client.connect();
// db= result.db(database);
// collection = db.collection('restaurant');
// let dataofquery4 = await collection.find({name: /^Wil/},
//     {
//     "restaurant_id" : 1,
//     "name":1,"borough":1,
//     "cuisine" :1
//     }
//     ).toArray();
// console.log(dataofquery4)

// const database = client.db('classtask4');
//         const details = database.collection('restaurant');

//         const query1 = {borough: 'Bronx' };
//         const rest = await details.findOne(query1);
//         console.log(rest._id);