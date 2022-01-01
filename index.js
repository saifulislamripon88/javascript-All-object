let person = "john doe";
console.log(person);

//

/**let persons = {
    fname:"saiful",
    lname:"islam",
    roll:7018,
    year:2022,
    college:"mockbul hossain college"
}
persons.fname = "jamal";
console.log(persons.fname+" "+ persons.lname+" "+persons.college+" "+persons.year);
//return jamal islam Mockbul hossain college

*/

/**let persons = {
    fname:"saiful",
    lname:"islam",
    roll:7018,
    year:2022,
    college:"mockbul hossain college"
}
persons.fname = "jamal";
persons.lname = "uddin";
console.log(persons.fname+" "+ persons.lname+" "+persons.college+" "+persons.year);
//return jamal uddin mockbul hossain college 2022

*/


let persons = {
    fname:"saiful",
    lname:"islam",
    roll:7018,
    year:2022,
    college:"mockbul hossain college",
    location:"Mohammadpur",
    district:"Dhaka",

    fullLocation:function(){
        return this.location+" "+ this.district;
    }

}
console.log(persons.fname+" "+ persons.lname+" "+persons.college+" "+persons.year + ", "+ persons.fullLocation());


//This example creates an empty JavaScript object, and then adds 4 properties:

const persObj = { };
 persObj.fnames = "saiful";
 persObj.lnames = "islam";
 persObj.year = 7018;
 persObj.roll = 1017;

 document.getElementById("demo1").innerHTML = persObj.fnames+" "+persObj.lnames+" "+persObj.year+" "+ persObj.roll;

 ///


 //The delete keyword deletes a property from an object:

 const dek = {
     nam:"saiful",
     nam2:"islam",
     roll:7018,
     year:2021,
     age:29
 }
 

 console.log(dek.nam+" "+dek.nam2+" "+dek.roll)
 //return saiful islam 7018
 delete dek.roll;
 delete dek.nam;
 console.log(dek.nam+" "+dek.nam2+" "+dek.roll)

 delete dek["age"];
 console.log(dek.nam+" "+dek.nam2+" "+dek.roll+ " "+ dek.age)


 //
//nested object 
 /**const myObj = {
     name:"saiful",
     year:2000,
     roll:"twenty",
     cars:{
         car1:"Lamborghini",
         car2:"tesla",
         car3:"lexus"
     }
 }
 console.log(myObj.cars.car1+" "+myObj.cars.car2+" "+myObj.name+" "+myObj.roll);
//return Lamborghini tesla saiful twenty
 */




/**const myObj = {
    name:"saiful",
    year:2000,
    roll:"twenty",

    cars:{
        car1:"Lamborghini",
        car2:"tesla",
        car3:"lexus",

        carchina:{
            cc1:"Bangladesh",
            cc2:"pakistan",
            cc3:"Afghanistan",

            cardep:{
                dd1:"mirpur",
                dd2:"mohammadpur",
                dd3:"lalmatia",

            }

        }
    }
}
console.log(myObj.cars.car1+" "+myObj.cars.car2+" "+myObj.name+" "+myObj.roll+" "+ myObj.cars.carchina.cc1+" "+myObj.cars.carchina.cc3+" "+myObj.cars.carchina.cardep.dd1+" "+ myObj.cars.carchina.cardep.dd2);

//return Lamborghini tesla saiful twenty Bangladesh Afghanistan mirpur mohammadpur

*/



//



const myObj = {
    name:"saiful",
    year:2000,
    roll:"twenty",

    cars:{
        car1:"Lamborghini",
        car2:"tesla",
        car3:"lexus",

        carchina:{
            cc1:"Bangladesh",
            cc2:"pakistan",
            cc3:"Afghanistan",

            cardep:{
                dd1:"mirpur",
                dd2:"mohammadpur",
                dd3:"lalmatia",

                carbb:{
                    ee1:"mr surajit",
                    ee2:"mr kashem",
                    ee3:"mr abul",

                    carff:{
                        ff1:"kala",
                        ff2:"white",
                        ff3:"red",
                        ff4:"black",
                        ff5:"green"

                    }

                }

            }

        }
    }
}
console.log(myObj.cars.car1+" "+myObj.cars.car2+" "+myObj.name+" "+myObj.roll+" "+ myObj.cars.carchina.cc1+" "+myObj.cars.carchina.cc3+" "+myObj.cars.carchina.cardep.dd1+" "+ myObj.cars.carchina.cardep.dd2+" "+myObj.cars.carchina.cardep.carbb.ee3+" "+myObj.cars.carchina.cardep.carbb.carff.ff5);



//Nested Arrays and Objects


/**const objperson ={
    fname:"kamal",
    lname:"uddin",
    roll:7018,
    fullname:function(){
        return this.fname +" "+ this.lname;
    }

}

console.log(objperson.fname);
console.log(objperson.fullname())
 */


const objperson ={
    fname:"kamal",
    lname:"uddin",
    roll:7018,
}
objperson.fullname = function(){
    return this.fname+" "+this.lname;
}
console.log(objperson.lname)
console.log(objperson.fullname());

//Using Built-In Methods toUpperCase()


// this is  normal way to create toUpperCase & tolowerCase;
const message = "hello world";
const messages = message.toUpperCase();
console.log(messages);
const mesag = messages.toLowerCase();
console.log(mesag);

// this is the way to create toUpperCase & toLowerCase

const mesPerson = {
    fist:"Hello",
    second:"World",
    fulword:function(){
        return this.fist+" "+this.second+" !";
    }
}
const finals = document.getElementById("demo2").innerHTML = mesPerson.fulword();
const finalsi = finals.toUpperCase();
const toUpper = document.getElementById("demo3").innerHTML = finalsi;

const toLower = toUpper.toLowerCase();
document.getElementById("demo4").innerHTML = toLower;


//

// object declare with loop

const loopPerson = {
    name:"saiful",
    reach:"reached",
    city:"new york",
    roll:2024
}

let text = " ";

for(let x in loopPerson){
    text += loopPerson[x]+" ";
}
document.getElementById("demo5").innerHTML = text;

//

const forPerson = {
    name:"saiful",
    names:"islam",
    fullnames:"ripon",
    rech:"reached",
    city:"germany",
    year:"in"+" "+2026
}
let texts = " ";

for(let forDetails in forPerson){
    texts += forPerson[forDetails]+" ";
}
document.getElementById("demo6").innerHTML = texts;



//Using Object.values()


const objectValues = {
    cars1:"volvo",
    cars2:"lamborghini",
    cars3:"lexus",
    cars4:"tesla",
    cars5:"bmw"
}
console.log(objectValues.cars1+" "+ objectValues.cars4+" "+objectValues.cars2);

const myArray = Object.values(objectValues);
document.getElementById("demo7").innerHTML = myArray;
console.log(myArray);

//
const objval = {
    name1:"saiful",
    name2:"islam",
    name3:"ripon",
    name4:"konok",
    name4:"jamal",
    name5:"uddin",
    name6:"kamal",
    name7:"uddin",
    name8:"rashel",
    name9:"kashem",
    name10:"abul"
}
const myArrays = Object.values(objval);
document.getElementById("demo8").innerHTML = myArrays;
console.log(myArrays);


//JSON.Stringyfy()

const stringPerson = {
    names1:"school",
    names2:"college",
    names3:"university",
    names4:"medical",
    names5:"engineering"
}
console.log(stringPerson.names5+" "+stringPerson.names3);

const myJson = JSON.stringify(stringPerson);
console.log(myJson)
document.getElementById("demo9").innerHTML = myJson;

//


const strPers = {
    cc1:"kamrul",
    cc2:"jamrul",
    cc3:"samrul",
    cc4:"faul"
}
const myjsonString = JSON.stringify(strPers);
console.log(myjsonString);



///
// Stringify Dates

const jsondate = {
    name:"kamals",
    today:new Date(),
    // days:alert("Hello Everyone")
}
console.log(jsondate.name+" "+ jsondate.today);
const jsDates = JSON.stringify(jsondate);
console.log(jsDates)


//

const perso = {
    fname:"kamals",
    lname:"uddins",
    get fullname(){
        return this.fname+" "+ this.lname;
    }
}
console.log(perso.fullname)


const abcd = {
    fNames:"abul",
    fNames2:"kabul",
    fNames3:"khabuls",
    get totalNames (){
        return this.fNames3+" "+this.fNames2+" "+this.fnames;
    }
}
console.log(abcd.fNames3);
console.log(abcd.totalNames)


//

//Data quality

const dataQuality = {
    name:"john",
    lname:"doe",
    roll:7018,
    college:"alhaz mockbul hossain college",
    get lang (){
        return this.college.toUpperCase();
    }
}
console.log(dataQuality.lang)


//
const datas = {
    class1:"seven",
    class2:"eight",
    college:"Dhaka statE collegE",
    get lang (){
        return this.college.toLowerCase();
    }
}
console.log(datas.lang);



//





//JavaScript Object Constructors
   
/**
    function Person(first, last, age, eye) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eye;
      }
      
      // Create two Person objects
      const myFather = new Person("John", "Doe", 50, "blue");
      const myMother = new Person("Sally", "Rally", 48, "green");
      
      // Display age
      document.getElementById("demo10").innerHTML =
      "My father is " + myFather.age + ". My mother is " + myMother.age + "."; 
      
      */




      function Person(first, second, age, eye) {
        this.firstName = first;
        this.lastName = second;
        this.age = age;
        this.eyeColor = eye;
    }
    const myFather = new Person("saiful","islam",50,"blue");
    const myMother = new Person("jamal","uddin",70,"red");
    document.getElementById("demo11").innerHTML =  
    "my age"+" "+myFather.age+" my fathers age is "+" "+ myMother.age;



    function Consers (first, second, age, eye) {
    this.firstName = first;
    this.lastName = second;
    this.age = age;
    this.eyeColor = eye;
    }
    const myQather = new Consers("jashim","uddin", 30, "blue");
 document.getElementById("demo10").innerHTML = "my old is "+ myQather.firstName+" "
 // document.getElementById("demo10").innerHTML = "my old is "+ myQather.age+" "
 myQather.nationality = "English";
 document.getElementById("demo12").innerHTML = "my nationality is "+" "+ myQather.nationality;

//



function ConsObj(name, names, age, year){
    this.firstname = name;
    this.lastname = names;
    this.age = age;
    this.years = year;
}
const myObjcons =new ConsObj ("allama","mamunul Haque",49,1973);
myObjcons.fastest = function(){
    return this.firstname+" "+this.lastname+" "+this.age+", "+this.years;
}
document.getElementById("demo13").innerHTML ="This is "+" "+ myObjcons.fastest();


// document.getElementById("demo13").innerHTML = "my profession "+ myObjcons.firstname+" "+myObjcons.lastname+" "+myObjcons.age+" "+myObjcons.years;




// javascript iterables

const letters = new Set(["a","b","c"]);
console.log(letters.size);


//
const letter = new Set();
letter.add("a");
letter.add("b");
letter.add("c");
letter.add("d");
console.log(letter.size)


///

const a = "a";
const b = "b";
const c = "c";
const d = "d";
const e = "e";

const abcde = new Set();
abcde.add(a);
abcde.add(b);
abcde.add(c);
abcde.add(d);
abcde.add(e);

console.log(abcde.size);

//

const abc = new Set(["a","b","c"]);
console.log(abc.size);
abc.add("h");
abc.add("g");
abc.add("i")
console.log(abc.size)



const prson = new Set(["a","b","saiful","islam"]);

let tprson = " ";

prson.forEach(function(value){
    tprson += value+" ";

})
console.log(tprson)


//
const littil = new Set(["kamal","jamall","saiful","surajit","raju"]);
let foprs = " ";

for(const  xx of littil.values()){
    foprs += xx+ " "+"<br>";


}
console.log(foprs)
document.getElementById("demo14").innerHTML = foprs;


//

const entryLetters = new Set(["Bangladesh","Pakistan","india","uganda","canada","America","Germany","Kuawet"]);
const iterator = entryLetters.entries();

let enLetters = " ";

for(const entry of iterator){
    enLetters += entry+" "+"<br>" ;

}
document.getElementById("demo15").innerHTML = enLetters;





//javascript Map();



const fruits = new Map([
    ["apple",350],
    ["mango",450],
    ["orange",550]
])
document.getElementById("demo16").innerHTML = fruits.get("orange");
document.getElementById("demo17").innerHTML = fruits.get("apple");

//

const fruit = new Map();

fruit.set("banana",500);
fruit.set("watermillon",600);
fruit.set("jackfruit",800);
document.getElementById("demo18").innerHTML ="jackfruit rate is = "+fruit.get("jackfruit");
document.getElementById("demo19").innerHTML ="watermilon rate is =  "+fruit.get("watermillon");
fruit.set("jackfruit",300);
document.getElementById("demo20").innerHTML ="jackfruit price is after discount = "+fruit.get("jackfruit")


//

const transcom = new Map();
transcom.set("pepsi",453.04);
transcom.set("mountaindew",633.92);
transcom.set("mirinda",646.96);

document.getElementById("demo21").innerHTML ="Pepsi 1000 ml price is  = "+ transcom.get("mirinda");
transcom.delete("pepsi");
document.getElementById("demo22").innerHTML = transcom.size;
transcom.clear(transcom);
document.getElementById("demo23").innerHTML ="map clear "+  transcom.size;

//
//Using Map.forEach():

const pepsico = new Map([
    ["Pepsi",800],
    ["Mirinda",900],
    ["Aquafina",1200],
    ["Mountain dew",1400]
])
let peps = " ";

pepsico.forEach(function(value,key){
    peps += key +" = "+value+" "+"<br>";
})
document.getElementById("demo24").innerHTML = peps;


//

const trasc = new Map([
    ["economics",1500],
    ["sociology",2000],
    ["mathmetics",2500]
]);
let subjects = " ";

for(const subj of trasc.keys()){
    subjects += subj+" "+"<br>";

}
document.getElementById("demo25").innerHTML = subjects;

//Sum all values

const transtec = new Map([
    ["tecno",14000],
    ["realme",17000],
    ["huawei",19000]
]);
let totalValue = " ";

for(const tvalue of transtec.values()){
    totalValue += tvalue+" "+"<br>";

}
document.getElementById("demo26").innerHTML = totalValue;

//javascript maph object

const apples = {name:"Apples"};
const bananas = {name:"bananas"};
const oranges = {name:"oranges"};
const jackfruits = {name:"jackfruits"};

const allFruits = new Map();

allFruits.set(apples,500);
allFruits.set(bananas,750);
allFruits.set(oranges,580);
allFruits.set(jackfruits,1500);
document.getElementById("demo27").innerHTML ="Apples price is = "+ allFruits.get(apples);
document.getElementById("demo28").innerHTML ="Orange price is = "+ allFruits.get(oranges);


//JavaScript Object.defineProperty()

const persobject = {
    name:"john",
    name2:"doe",
    name3:"malaun",
    name4:"harun",
    language:"english"
}
Object.defineProperty(persobject,"language",{value:"History"});
document.getElementById("demo29").innerHTML = "History subject instead of economics  👉 "+persobject.language;

Object.defineProperty(persobject,"name3",{value:"Hindiusm"});
document.getElementById("demo30").innerHTML ="Changed after name is 👉 "+ persobject.name3;

//JavaScript Object.defineProperty()

const newObjects = {
    name1:"kamal",
    name2:"jamal",
    name3:"alal",
    name4:"kallu"
}
Object.defineProperty(newObjects,"years",{value:new Date()});
document.getElementById("demo31").innerHTML = "Current years is 👉 "+newObjects.years;

