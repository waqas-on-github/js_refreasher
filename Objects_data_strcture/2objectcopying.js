let user = { name: "John" };

let admin = user; // copy the reference


console.log(admin)
console.log(user)

user.age=22
console.log(admin)

// what if we wanna copy object 

let clone ={}
clone =Object.assign(user)
console.log(clone)



