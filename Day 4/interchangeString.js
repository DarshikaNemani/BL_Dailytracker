let firstName = "Darshika";
let lastName = "Nemani";

firstName = firstName + lastName;
lastName = firstName.slice(0,firstName.length-lastName.length);
firstName = firstName.slice(lastName.length);

console.log(firstName,lastName)