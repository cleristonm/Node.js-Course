const name = 'Keko';
let age = 39;
const hasHobbies = true;

//name = "Cleriston";
age = 38;

function summarizeUser(userName, userAge, userHasHobby){
    return ('Name is '+ 
            userName +
            ', age is  '+
            userAge +
            ' and the user has hobbies: '+
            userHasHobby
            );
}


console.log(summarizeUser(name, age, hasHobbies));