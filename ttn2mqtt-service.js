var MQTTclients = require ('./MQTTConnector.js');


  MQTTclients.ttn_client.on('message', function (topic, message) {
    try {
    //console.log(message.toString());
    message=JSON.parse(message);
    switch(topic) {
      case 'iotwapplication001/devices/iotwdevice001/up':
          var payload_raw = Buffer.from(message.payload_raw, 'base64').toString('ascii');
          console.log(payload_raw);
          var fromEmbedded = JSON.parse(payload_raw);
          MQTTclients.cloudmqtt_client.publish(fromEmbedded.t, fromEmbedded.m)
          break;
      default:        
  }
} catch(e)
{

}
})



// example how to get all table contents
/*
async function doIt() {
try {
  const result = await pg.getAll('discover');
  console.log(result[0].token);
} catch (e) {
  console.log("error");
}
}
doIt();
*/

MQTTclients.ttn_client.subscribe('iotwapplication001/devices/+/up')



