'use strict';

var vars = require('../index');
var dataManager=require('./data');
var DAC = require('../DAC');
var config = require('../config');
var mqtt = vars.mqtt;



//Write file
var fs = require('fs');
var filename = "test.csv";


var result;
var idRequest=0;
var reqMap = new Map();


var request={
    "resource": "",
    "method": "",
    "sender":"",
    "idRequest": 0,
    "params": {

        }
  };


var timeOutValue = 1500;


exports.sendRequest =function (body, resource, method, devices, res){
    var id=idRequest
    idRequest++



    //TODO: Change if necessary by your configuration
    request.resource=resource;
    request.method=method;
    request.idRequest=id;
    request.sender=config.topicSender;
    request.devices=devices;
    request.params=body;

    dataManager.createRequest(id);
    reqMap.set(id, { res: res, method: method, body: body, sent: false});

    mqtt.publish(config.topicReceivers, JSON.stringify(request));

    return id;

}




exports.sendResult = function (id){

        id= parseInt(id)

        var obj = reqMap.get(id);

        if(obj.sent==false){
            var res = obj.res;
            var method= obj.method;
            reqMap.set(id, { res: null, method: null, body: null, sent: true});
            result=dataManager.getResult(id)

            if(result.length>0){

                result=DAC.aggregate(result,method)

                console.log(result)

                res.contentType('application/json');
                res.status(200).send(result);
            }else{
               obj.res.status(204).end();
           }

        }

    }




