'use strict';

var User = require('../service/UserService');

module.exports.getLocation = function getLocation (req, res, next) {

    User.getLocation(req.swagger.params, res, next);


};

module.exports.getMusic = function getMusic (req, res, next) {

    User.getMusic(req.swagger.params, res, next);


};

module.exports.getTemperature = function getTemperature (req, res, next) {

    User.getTemperature(req.swagger.params, res, next);


};
