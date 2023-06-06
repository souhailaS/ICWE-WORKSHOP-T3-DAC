'use strict';
var locationmanager=require('./locationmanager')


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

exports.selectMusic = function (result){
    var reqMap = new Map();

    console.log(result)
    result.forEach(musicList => {
        musicList.forEach(genre =>{

            if(reqMap.get(genre) == null)
                reqMap.set(genre, { frequency: 1});
            else{
                reqMap.set(genre, { frequency: reqMap.get(genre).frequency+1});
            }
        });
        
    });
    
    let jsonObject = {};  
    reqMap.forEach((value, key) => {  
        jsonObject[key] = value  
    });  
    console.log(JSON.stringify(jsonObject)) 
    
    
    return jsonObject;

}

exports.heatmap = function (result){
    result=locationmanager.convertLocations(result)
    result=locationmanager.buildHeatMap(result)

    return result
}