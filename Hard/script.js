// a varible that takes in a function with two parameters
const personDetails = function(personName, personSsn){
    //has an object holding two parameters
    let pii = {
        name : personName,
        ssn : personSsn

    }
    //function returns an object that holds 2 methods
    return {
        getName : () => {
            return pii.name
        },
        getSsn : () => {
            return pii.ssn
        }
    }
}

// When you call a method, you need () to let JS know that youre calling on a method which is a fucntion with an object
const patientOne = personDetails('Shaye', 12345678)

console.log(patientOne.getName())
console.log(patientOne.getSsn())

//undefined
console.log(patientOne.name)
//undefined
console.log(patientOne.ssn)