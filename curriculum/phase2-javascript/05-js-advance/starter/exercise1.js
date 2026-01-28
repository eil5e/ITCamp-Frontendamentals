const user = { //name and active state 
    name: "tim",
    activeState: "active"
};

// Before:
function getCard(user) {

}

// After (they need to write this):
const getCard = (user) => `Hello ${user}`;

const message = isActive? "Active" : "Offline";
const status = isActive? "Active" : "Offline";
return `User ${user?.name} is ${status}`;

console.log(user?.name);

//write a single arrow function called getCard that takes a user object and returns a string message.
//arrow: must be one liner
//ternary:check isActive. if true say active, else offline
//backticks: return format: "User[Name] is [Status]"
//optional chaining: safely access user?.name