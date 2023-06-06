'use strict';

//TODO: Change the type of result variable if it's necessary
var resultRequest=[];



exports.insertData = function (json){

    if(resultRequest.length>0){
        for(let val of resultRequest) {
            if(val.idRequest==json.idRequest){
                val.content.push(JSON.parse(json.body))
                return val.content.length;

            }
        }
    }else
        return 0
}



exports.getResult = function(id,method,params){
    var res =  returnResults(id);

    if (res.length==0)
        return []

    deleteRequest(id)

    return res;

}

exports.createRequest = function(id){
    var schema={"idRequest":0,"content":[]}
    schema.idRequest=id
    resultRequest.push(schema)
}

function deleteRequest(id){
    resultRequest = resultRequest.filter(function(item){
        return item.idRequest !== id;
    });
}

function returnResults(idRequest){
    if(resultRequest.length>0){
        for(let val of resultRequest) {
            if(val.idRequest==idRequest){
                return val.content
            }
        }

        return []

    }else
        return []
}