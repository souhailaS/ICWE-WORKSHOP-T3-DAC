'use strict';



exports.avg = function (result){
    var finalResult=0;


    result.forEach(element => {
        finalResult=finalResult+element
    });

    finalResult=finalResult/result.length
    finalResult=finalResult.toFixed(2)

    //Formated in JSON
    finalResult={"avg" : finalResult}

    return finalResult


}

exports.selectMusic = function (json){
 //TODO

}

exports.heatmap = function (json){
    //TODO


}