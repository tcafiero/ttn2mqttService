![](./images/IoThingsWareWideSmall.png)
# mqtt2postgress-service


This Service reads data coming from Bluetoth Low Energy Tokens and append them into a cloud base DB. This Service is made of nodejs code can run into a local machine or in Cloud (AWS).

BLE Tokens Advetise themselves putting some sensor coming data into Advertising Packet.
We can use some cheap easy to buy token as "JustFoundIt" that can be used to understand if they are in the range we can discover It or using the RSSI value to infer how far from a BLE controller is.

Otherwise we can make custom tokens let say using Adafruit Feather nRF52. In this case we can put in Advertising packet data coming from sensors (see project [BLEtoken](https://github.com/tcafiero/BLEtoken)).

To make Service receiving data from BLE Tokens we need a Gateway (see project [BLEtokenGateway](https://github.com/tcafiero/BLEtokenGateway)) that read data coming from Tokens and transmit them on networ using MQTT protocol.

## The MQTT Broker


This Service connect to a MQTT broker hosted in Cloud MQTT (www.cloudmqtt.com) using instance IoT. The Service to use this broker must use this parameters:

    url:	m23.cloudmqtt.com
    port:	16947
    user:	tester
    password:	tester

If you want to manage this instance from a web page use http://www.hivemq.com/demos/websocket-client/ using this access parameters:

    url:	m23.cloudmqtt.com
    port:	36947
    SSL:	(checked)
    user:	tester
    password:	tester
    then subscribe using # that means all tokens

The Service to receive data from this broker have to subscribe for this token:

    /token/

The data coming from the broker has JSON format. The format is folowing:

    {"gateway":"<gateway address>","token":{"address":"<token address>","name":"<token name>","rssi":<RSSI value>}}

example:

    {"gateway":"88a408a4ae30","token":{"address":"ec:90:be:5c:d3:bd","name":"IoThingsWare","rssi":-23}}


## The DB server (Postgress in AWS Cloud)
As stated before data coming from MQTT broker are appended into a remote database.
The remote database we use is Postgress in Amazon AWS.
These are the parameter to access this database:

	Host name/address: mydb.c3awcpsaz3jg.eu-west-1.rds.amazonaws.com
	Port: 5432
	User: trial
	Password: Trial001

This database is documented into subfolder:

	./PostgressSchema	

## Installation


Stable: `npm install mqtt2postgress-services`

## mqtt2postgress-services.js a service on AWS starting automatically

	$ sudo npm install -g forever
	$ sudo npm install -g forever-service
	$ forever-service --help
	$ sudo forever-service install mqtt2postgress-services -s \
	/home/ubuntu/services/node_modules/mqtt2postgress-services\
	/mqtt2postgress-services.js
	forever-service version 0.5.11
	
	Platform - Ubuntu 16.04.2 LTS
	gps2mqtt-server provisioned successfully
	
	Commands to interact with service mqtt2postgress-services
	Start   - "sudo service mqtt2postgress-services start"
	Stop    - "sudo service mqtt2postgress-services stop"
	Status  - "sudo service mqtt2postgress-services status"
	Restart - "sudo service mqtt2postgress-services restart"
	$ sudo service mqtt2postgress-services start



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
