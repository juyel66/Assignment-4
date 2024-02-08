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






