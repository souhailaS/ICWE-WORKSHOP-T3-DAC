'use strict';
var params = require('../util/parameters.js');
var sender = require('../managers/communication.js');
var body;

/**
 * Gets the current location
 *
 * returns Location
 **/
var paramsgetLocation=[];
var timeoutgetLocation=1800; 
var devicesgetLocation=10; 

module.exports.getLocation = function(req, res, next) {

    body={}
    body=params.getParams(req,paramsgetLocation)

    var id=sender.sendRequest(body,"User","getLocation", devicesgetLocation, res);

    setTimeout(function(){
        sender.sendResult(id)
    }, timeoutgetLocation);


};

/**
 * Gets a list of favourite music genres
 *
 * returns List
 **/
var paramsgetMusic=[];
var timeoutgetMusic=2000; 
var devicesgetMusic=10; 

module.exports.getMusic = function(req, res, next) {

    body={}
    body=params.getParams(req,paramsgetMusic)

    var id=sender.sendRequest(body,"User","getMusic", devicesgetMusic, res);

    setTimeout(function(){
        sender.sendResult(id)
    }, timeoutgetMusic);


};

/**
 * Gets the environment temperature
 *
 * returns Temperature
 **/
var paramsgetTemperature=[];
var timeoutgetTemperature=1500; 
var devicesgetTemperature=10; 

module.exports.getTemperature = function(req, res, next) {

    body={}
    body=params.getParams(req,paramsgetTemperature)

    var id=sender.sendRequest(body,"User","getTemperature", devicesgetTemperature, res);

    setTimeout(function(){
        sender.sendResult(id)
    }, timeoutgetTemperature);


};

