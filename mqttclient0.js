var mqtt = require('mqtt')
client = mqtt.createClient(1883, '10.10.2.6');

client.subscribe('presence');

console.log('Client publishing.. ');

client.publish('presence', '');

client.end();
