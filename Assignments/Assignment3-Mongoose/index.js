                                                        // DANIA JAWAD
                                                        // 20i0569
                                                        // CS-A

import https from 'https'
import mongoose from 'mongoose'

mongoose.connect('mongodb://127.0.0.1:27017/DatabaseA3').then((x) => {
    console.log(`Connected to MongoDB! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongoDB', err.reason)
  })

                                    //Schema for ROUTEs
  const Schema = mongoose.Schema;
  let routeSchema = new Schema({
             rt: {
                type:String
            },
            rtnm: {
                type:String
            },
            rtclr: {
                type:String
            },
            rtdd: {
                type:String
            }
  });

  const newRoute = mongoose.model('routes',routeSchema)



                                        //////function for routesss
const getRoutes = () => {
  let data = '';

  const request1 = https.get('https://www.ctabustracker.com/bustime/api/v2/getroutes?key=ujAhaYu9dy6TAF2VgMLWK5nnV&amp&format=json', (response) => {
    // Set the encoding, so we don't get log to the console a bunch of gibberish binary data
    response.setEncoding('utf8');

    // As data starts streaming in, add each chunk to "data"
    response.on('data', (chunk) => {
      data += chunk;
    });

    // adding into db
    response.on('end', () => {
      const newValues = JSON.parse(data);
      console.log(newValues);

      for(let i=0; i<newValues['bustime-response'].routes.length; i++){
        const newROte = new newRoute({
            rt:newValues['bustime-response'].routes[i]['rt'],
            rtnm:newValues['bustime-response'].routes[i]['rtnm'],
            rtclr:newValues['bustime-response'].routes[i]['rtclr'],
            rtdd:newValues['bustime-response'].routes[i]['rtdd'],
        });
        newROte.save();
        
      }
    });
  });

  //checks for errors
  request1.on('error', (error) => {
    console.error(error);
  });

  // ending request
  request1.end();
};

                                    //Schema for TIME
let timeSchema = new Schema({
    tm: {
        type:String
    },
});
const newTime = mongoose.model('time',timeSchema)

                                        //////function for timee
const getTime = () => {
    let data = '';
  
    const request2 = https.get('https://www.ctabustracker.com/bustime/api/v2/gettime?key=ujAhaYu9dy6TAF2VgMLWK5nnV&amp&format=json', (response) => {
      // Set the encoding, so we don't get log to the console a bunch of gibberish binary data
      response.setEncoding('utf8');
  
      // As data starts streaming in, add each chunk to "data"
      response.on('data', (chunk) => {
        data += chunk;
      });
  
      // adding into db
      response.on('end', () => {
        const newValues1 = JSON.parse(data);
        console.log(newValues1);

        // for(let i=0; i<newValues1['bustime-response'].length; i++){
          const newTimee = new newTime({
              tm:newValues1['bustime-response'].tm
          });
          newTimee.save();
          
        // }
      });
    });
  
    //checks for errors
    request2.on('error', (error) => {
      console.error(error);
    });
  
    // ending request
    request2.end();
  };


                                      //Schema for VEHICLES
let vehicleSchema = new Schema({
    vid : {
        type:String
    },
    tmstmp: {
        type:String
    },
    lat: {
        type:String
    },
    lon: {
        type:String
    },
    hdg: {
        type:String
    },
    pid:{
        type:String
    },
    rt: {
        type:String
    },
    des: {
        type:String
    },
    pdist:{
        type:String
    },
    dly: {
        type:String
    },
    tatripid: {
        type:String
    },
    origtatripno:{
        type:String
    },
    tablockid: {
        type:String
    },
    zone: {
        type:String
    },
});
const newVehicle = mongoose.model('vehicles',vehicleSchema)

                                        //////function for vehicles
const getVehicles = () => {
let data = '';

const request1 = https.get('https://ctabustracker.com/bustime/api/v2/getvehicles?key=ujAhaYu9dy6TAF2VgMLWK5nnV&amp&rt=20&amp&format=json', (response) => {
    // Set the encoding, so we don't get log to the console a bunch of gibberish binary data
    response.setEncoding('utf8');

    // As data starts streaming in, add each chunk to "data"
    response.on('data', (chunk) => {
    data += chunk;
    });

    // adding into db
    response.on('end', () => {
    const newValues = JSON.parse(data);
    console.log(newValues);

    for(let i=0; i<newValues['bustime-response'].vehicle.length; i++){
        const newV = new newVehicle({
            vid:newValues['bustime-response'].vehicle[i]['vid'],
            tmstmp:newValues['bustime-response'].vehicle[i]['tmstmp'],
            lat:newValues['bustime-response'].vehicle[i]['lat'],
            lon:newValues['bustime-response'].vehicle[i]['lon'],
            hdg:newValues['bustime-response'].vehicle[i]['hdg'],
            rt:newValues['bustime-response'].vehicle[i]['rt'],
            des:newValues['bustime-response'].vehicle[i]['des'],
            pdist:newValues['bustime-response'].vehicle[i]['pdist'],
            dly:newValues['bustime-response'].vehicle[i]['dly'],
            tatripid:newValues['bustime-response'].vehicle[i]['tatripid'],
            origtatripno:newValues['bustime-response'].vehicle[i]['origtatripno'],
            tablockid:newValues['bustime-response'].vehicle[i]['tablockid'],
            zone:newValues['bustime-response'].vehicle[i]['zone'],
        });
        newV.save();
        
    }
    });
});

//checks for errors
request1.on('error', (error) => {
    console.error(error);
});

// ending request
request1.end();
};



                                    //Schema for DIRECTIONS
let DirecSchema = new Schema({
    dir: {
        type:String
    },
});
const newDire = mongoose.model('directions',DirecSchema)

                                        //////function for DIRECTIONS
const getDirections = () => {
    let data = '';
    
    const request2 = https.get('https://ctabustracker.com/bustime/api/v2/getdirections?key=ujAhaYu9dy6TAF2VgMLWK5nnV&amp&rt=20&amp&format=json', (response) => {
        // Set the encoding, so we don't get log to the console a bunch of gibberish binary data
        response.setEncoding('utf8');
    
        // As data starts streaming in, add each chunk to "data"
        response.on('data', (chunk) => {
        data += chunk;
        });
    
        // adding into db
        response.on('end', () => {
        const newValues1 = JSON.parse(data);
        console.log(newValues1);
    
        for(let i=0; i<newValues1['bustime-response'].directions.length; i++){
            const newDirr = new newDire({
                dir:newValues1['bustime-response'].directions[i]['dir'],
            });
            newDirr.save();
            
        }
        });
    });
    
    //checks for errors
    request2.on('error', (error) => {
        console.error(error);
    });
    
    // ending request
    request2.end();
    };
      
    


                                    //Schema for STOPS
let stopsSchema = new Schema({
    stpid:  {
        type:String
    },
    stpnm:  {
        type:String
    },
    lat:  {
        type:String
    },
    lon:  {
        type:String
    },
});
const newStoPs = mongoose.model('stops',stopsSchema)

                                        //////function for STOPS
const getStops = () => {
    let data = '';
    
    const request2 = https.get('https://ctabustracker.com/bustime/api/v2/getstops?key=ujAhaYu9dy6TAF2VgMLWK5nnV&amp&rt=7&amp&dir=Eastbound&amp&format=json', (response) => {
        // Set the encoding, so we don't get log to the console a bunch of gibberish binary data
        response.setEncoding('utf8');
    
        // As data starts streaming in, add each chunk to "data"
        response.on('data', (chunk) => {
        data += chunk;
        });
    
        // adding into db
        response.on('end', () => {
        const newValues1 = JSON.parse(data);
        console.log(newValues1);  
    
        for(let i=0; i<newValues1['bustime-response'].stops.length; i++){
            const newStopp = new newStoPs({
                stpid:newValues1['bustime-response'].stops[i]['stpid'],
                stpnm:newValues1['bustime-response'].stops[i]['stpnm'],
                lat:newValues1['bustime-response'].stops[i]['lat'],
                lon:newValues1['bustime-response'].stops[i]['lon'],
            });
            newStopp.save();
            
        }
        });
    });
    
    //checks for errors
    request2.on('error', (error) => {
        console.error(error);
    });
    
    // ending request
    request2.end();
    };
                                                                            



                                    //Schema for PATTERN
let pattSchema = new Schema({
    pid:  {
        type:String
    },
    ln:  {
        type:String
    },
    rtdir:  {
        type:String
    },
    pt:  {
        type:String
    },
    seq:{
        type:String
    },
    lat:{
        type:String
    },
    lon:{
        type:String
    },
    typ:{
        type:String
    },
    stpid:{
        type:String
    },
    stpnm:{
        type:String
    },
    pdist:{
        type:String
    }
  });
const newpatt = mongoose.model('Pattern', pattSchema)

                                        //////function for PATTERN
const getPatterns = () => {
    let data = '';
    
    const request2 = https.get('https://ctabustracker.com/bustime/api/v2/getpatterns?key=ujAhaYu9dy6TAF2VgMLWK5nnV&amp&rt=20&amp&pid=954&amp&format=json', (response) => {
        // Set the encoding, so we don't get log to the console a bunch of gibberish binary data
        response.setEncoding('utf8');
    
        // As data starts streaming in, add each chunk to "data"
        response.on('data', (chunk) => {
        data += chunk;
        });
    
        // adding into db
        response.on('end', () => {
        const newValues1 = JSON.parse(data);
        console.log(newValues1);  
    
        for(let i =0; i< newValues1['bustime-response'].ptr.length; i++)
        {
                for(let j =0; j< newValues1['bustime-response'].ptr[i].pt.length; j++)
                {
                    const newpattern = new newpatt({

                        pid:newValues1['bustime-response'].ptr[i]['pid'],
                        ln:newValues1['bustime-response'].ptr[i]['ln'],
                        rtdir:newValues1['bustime-response'].ptr[i]['rtdir'],
                        seq:newValues1['bustime-response'].ptr[i].pt[j]['seq'],
                        lat:newValues1['bustime-response'].ptr[i].pt[j]['lat'],
                        lon:newValues1['bustime-response'].ptr[i].pt[j]['lon'],
                        typ:newValues1['bustime-response'].ptr[i].pt[j]['typ'],
                        stpid:newValues1['bustime-response'].ptr[i].pt[j]['stpid'],
                        stpnm:newValues1['bustime-response'].ptr[i].pt[j]['stpnm'],
                        pdist:newValues1['bustime-response'].ptr[i].pt[j]['pdist']
                    });

                    newpattern.save();
                }
           
        }
        });
    });
    
    //checks for errors
    request2.on('error', (error) => {
        console.error(error);
    });
    
    // ending request
    request2.end();
    };    

getTime();
getRoutes();
getVehicles();
getDirections();
getStops();
getPatterns();