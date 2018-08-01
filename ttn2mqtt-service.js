var MQTTclients = require ('./MQTTConnector.js');
var table = new Object(); // or just {}
table['41000000001'] = '/Temperature/';
table['41000000002'] = '/Temperature/';
table['53000000001'] = '/Jacket/Position/';
table['53000000002'] = '/Jacket/Temperature/';
table['53000000003'] = '/Jacket/Switch/';
table['53000000004'] = '/Jacket/Switch/';
table['54000000001'] = '/Sav/Pan/';
table['54000000002'] = '/Sav/Tilt/';
table['54000000003'] = '/Sav/Zoom/';
table['54000000004'] = '/Sav/Att/';
table['54000000005'] = '/Sav/Att/';
table['55000000001'] = '/YRD/Att/';
table['55000000002'] = '/YRD/Att/';
table['56000000001'] = '/Vis/Up/';
table['56000000002'] = '/Vis/Down/';
table['56000000003'] = '/Vis/Right/';
table['56000000004'] = '/Vis/Left/';
table['56000000005'] = '/Vis/ZoomIn/';
table['56000000006'] = '/Vis/ZoomOut/';
table['56000000007'] = '/Vis/Start/';
table['56000000008'] = '/Vis/Stop/';
table['56000000009'] = '/Vis/Stow/';
table['5600000000A'] = '/Vis/Fast/';
table['57000000001'] = '/GPS/Lat/';
table['57000000002'] = '/GPS/Lon/';


  MQTTclients.ttn_client.on('message', function (topic, message) {
    try {
    //console.log(message.toString());
    message=JSON.parse(message);
    switch(topic) {
      case 'iotwapplication001/devices/iotwdevice001/up':
          var payload_raw = Buffer.from(message.payload_raw, 'base64').toString('ascii');
          console.log(payload_raw);
          payload_raw.substring(0,11)
          var fromEmbedded = JSON.parse(payload_raw);
          MQTTclients.cloudmqtt_client.publish(table[fromEmbedded.a.substring(0,11)]+fromEmbedded.a, fromEmbedded.v);
          break;
      default:        
  }
} catch(e)
{
  console.log("error");
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



