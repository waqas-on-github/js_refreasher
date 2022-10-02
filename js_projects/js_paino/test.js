//  #problem  Dont know how to get data from object then 
//  itrate on it and save in array  
let arr=[ 
    { 
       name :"waqas",
       age:24
    },
    { 
        name :"usman",
        age:45
     }, { 
        name :"aamir",
        age:35
     }, { 
        name :"ahmid",
        age:25
     }, { 
        name :"irfan",
        age:35
     },
]


function getatr(ar){
    let arr=[]
    for (let i=
      0;i<=ar.length-1;i++){
         var x=ar[i].name
         console.log(x)
          arr.push(x)
    }
    return arr
}

console.log(getatr(arr))