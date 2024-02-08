// third problem

function deleteInvalids(array){
    if(Array.isArray(array) !==true){
        return 'Invalid Array'
    }
    let FinalArray=[];
    for(const item of array){
        if(typeof item === 'number' && !isNaN(item) ){
            FinalArray.push(item);

        }
    }
    return FinalArray;
}






