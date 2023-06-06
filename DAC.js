'use strict';
const operators = require('./util/operators');

exports.aggregate =function (result, method){
    switch(method){
        case 'getTemperature':
             result=operators.avg(result); 
            return result;
        break;
        case 'getLocation':
             result=operators.heatmap(result); 
            return result;
        break;
        case 'getMusic':
             result=operators.selectMusic(result); 
            return result;
        break;
    }


}