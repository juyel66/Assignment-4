// 1st problem

function calculateMoney(ticket) {
    if( typeof ticket !=='number'){
        return 'Please provide number'
    }
    else if(ticket<0){
        return 'Invalid Number'

    }
    else{
        return (ticket*120-(500+(8*50)));

    }
    
    }





    // second problem

    function checkName(name) {
        if ( typeof name !=='string'){
            return 'Invalid'
        }
    
    
    const inputName = name.toLowerCase();
    const goodNameLastLetter = ['a', 'y', 'i', 'e', 'o', 'u', 'w' ];
    
    const lastChar= inputName.charAt(inputName.length-1);
    if(goodNameLastLetter.includes(lastChar)){
        return'Good Name'
    }
    else {
        return'Bad Name'
    }
        }



        // 3rd problem

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





        // 4th problem

function password(obj) {
    if (!obj.name || !obj.birthYear || !obj.siteName){
        return 'Invalid'
    }
    else if ( obj.birthYear.toString().length !==4){
        return 'Invalid'
    }
    else {
        const firstLetterUpperCase = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);
        const password = firstLetterUpperCase + '#' + obj.name + '@' + obj.birthYear;
        return password;
        
    }

}







// 5th problem

function monthlySavings(array ,Cost) {
    if ( Array.isArray(array) !==true || typeof Cost !== 'number'){
        return 'Invalid Input'
    }
    let motIncome= 0;
    for(const item of array){
        if(item < 3000) {
            motIncome = motIncome + item;

        }
        else {
            const tax = item * 0.20;
            const income = item- tax;
            motIncome = motIncome + income;
            
        }
    }
    const saving = motIncome - Cost;
    if (saving >=0){
        return saving;
    }
    else{
        return 'earn more';
    }
    
}
