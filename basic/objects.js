
// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// JsUser.email = "hitesh@chatgpt.com"
// // Object.freeze(JsUser)
// JsUser.email = "hitesh@microsoft.com"
// // console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }
// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

const my=Symbol("key1")
const rks={
    name:"Rajiv Ranjan Yadav",
    age:23,
    location:"koat bazar sitamrhi",
    email:"rkstmo1@gmail.com",
    [my]:"Nisha"
}

//console.log(rks);
//console.log(typeof rks[my]);

// rks.email="rajivranjankdh@gmail.com"
// Object.freeze(rks)
// rks.email="rajivranjankdhmicro@gmail.com"
// console.log(rks);

rks.gretting=function(){
    console.log("Hello User");
}
rks.grettingTwo=function(){
    console.log(`Hello User, ${this.name}`);
}
console.log(rks.gretting());
console.log(rks.grettingTwo());