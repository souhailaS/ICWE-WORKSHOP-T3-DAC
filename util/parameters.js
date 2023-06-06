'use strict';


exports.getParams = function(req, keyParams){


    var body={}

    var keys = Object.keys(req);
    for (var i = 0; i < keys.length; i++) {
        body[keyParams[i]]=req[keys[i]].value
    }
    return body;

}