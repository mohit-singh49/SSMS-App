const { createClient } = require('redis');

const client = createClient({
    password: 'v0qRpknrgV54SKSml2QaS1lxTCWZpOQV',
    socket: {
        host: 'redis-15363.c281.us-east-1-2.ec2.cloud.redislabs.com',
        port: 15363
    }
});
(async ()=>{
    await client.connect();
})();

client.on('ready',()=>{
    console.log("Connected");
});

client.on('err',(err)=>{
    console.error(err);
})

module.exports = client;