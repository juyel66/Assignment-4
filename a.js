// problem 1

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

    