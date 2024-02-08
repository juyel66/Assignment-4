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