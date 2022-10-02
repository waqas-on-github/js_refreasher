let user = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30        // by key "age" store value 30
  };

//   accessing Object values 

console.log(user.name)   //john 
// addding keys 
user.class ="11th"
user.temp="temp"
// deleting from object 

delete user.temp


// itrating on Objects

for (let item in user){    //but it will itrate on keys only 
    console.log(item)
}
  // enumarating on objects 
for (let [key,value] of  Object.entries(user)){
    console.log(`${key} = ${value}`)
}
