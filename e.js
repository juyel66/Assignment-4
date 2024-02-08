
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


