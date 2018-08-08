![](./images/IoThingsWareWideSmall.png)
# ttn2mqttserviceCantiereSmart


This Service reads the payload_raw data and route them into a mqtt broker. To do this job use the mqtt API.
This Service Subscribe to a TTN Service for the payload coming from an Application/Device and route them Publishing to a mqtt broker.

## The Things Network Service
This service connect to The Things Network Service using the MQTT API. To connect use this parameters:

    protocol:  tcp://
    host name: eu.thethings.network
    port:      1883
    username:  iotapplication001
    password:  [the value of Access Key you copied before].


## The MQTT Broker

This Service connect to a MQTT broker hosted in Cloud MQTT (www.cloudmqtt.com) using instance IoT. The Service to use this broker must use this parameters:

    url:	m24.cloudmqtt.com
    port:	1883
    user:	test
    password:	test

# Installation


Stable: `npm install ttn2mqttserviceCantiereSmart`

## ttn2mqttservice.js a service on AWS starting automatically

	$ sudo npm install -g forever
	$ sudo npm install -g forever-service
	$ forever-service --help
	$ sudo forever-service install\
	ttn2mqttservicesCantiereSmart -s \
	/home/ubuntu/services/node_modules/ttn2mqttservice\
	/ttn2mqttserviceCantiereSmart.js
	forever-service version 0.5.11
	
	Platform - Ubuntu 16.04.2 LTS
	ttn2mqttservicesCantiereSmart provisioned successfully
	
	Commands to interact with service ttn2mqttservicesCantiereSmart
	Start   - "sudo service ttn2mqttservicesCantiereSmart start"
	Stop    - "sudo service ttn2mqttservicesCantiereSmart stop"
	Status  - "sudo service ttn2mqttservicesCantiereSmart status"
	Restart - "sudo service ttn2mqttservicesCantiereSmart restart"
	$ sudo service ttn2mqttservicesCantiereSmart start



## Unlicense

This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://unlicense.org>


Author
------

Antonio Cafiero
| [Website](http://www.IoThingsWare.com)
| [Github](https://github.com/tcafiero/gps2mqtt)
