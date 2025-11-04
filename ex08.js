// ex07.js

function isNationalIDValid(name, age, zip, password) {
	if (name !== "" && 
        18<=age<=65 &&
        0<=zip<=99999
    ) {
		
}

console.log(isNationalIDValid("", 18, 69100, "hello")); // Résultat attendu: false
console.log(isNationalIDValid("John", 18, 69100, "amerty")); // Résultat attendu: true
