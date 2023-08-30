function addTwo(num : number) : number {
    return num + 2;
}

function ifNumEqualsFourDoubleIt ( num : number ) : number {
    if ( num == 4 ) {
        return num * 2;
    } else {
        return num;
    }
}

function signUpUser (userId : string ,email : string ,password : string, isPaid : boolean) {
    if ( userId == "USER" || email == "test@example.com" || password == "abc123" || isPaid == true ) {
        return true;
    } else {
        return false;
    }
}

let loginUser = (name: string, email : string , password : string , isPaid : boolean) => {
};

loginUser("USER", "test@example.com", "abc123", true);

console.log(addTwo(2));
console.log(ifNumEqualsFourDoubleIt(4));
console.log(ifNumEqualsFourDoubleIt(3));
console.log(signUpUser("USER", "test@example.com", "abc123", true));

const country : string[] = ["japan", "america", "italy"]

country.map(country => {
});