console.clear();

const taco = {id:1, name:'chicken', price:20, about:'Yummy'}

const taco1 = {id:2, name:'carne asada', price:18, about:'Tasty'}

const taco2 = {id:3, name:'fish', price:30, about:'So good'}



const tacos = [taco, taco1, taco2]



// write a function that takes an tacoOBJ and a id and returns a new object with name changed to "changed"

const tacoChanged = (tacosOBJ,newid) =>{
  return {...tacosOBJ, id:newid, name:"changed"}
};


console.log('Changing Taco Name');
console.log(tacoChanged(taco, 4));
console.log(" \n \n");

// write a function that takes an tacoOBJ and return some formatted html (will be a string technically)

const logtaco = (tacoOBJ) => {
  const {name, price} = tacoOBJ;
  console.log(`<a>${name} cost ${price}</a>`);
};
console.log("Formatted HTMl?");
logtaco(taco1);
console.log(" \n \n");

// write a function that takes an tacoOBJ and return formatted price with .00 

const priceReformat = (tacoOBJ) =>{
  const {price} = tacoOBJ;
  newPrice = price.toFixed(2);
  return { ...tacoOBJ, price: newPrice};
};

console.log("Formatted Price");
console.log(priceReformat(taco1));
console.log(" \n \n");
// create a new array where all of the prices is formatted with .00

const priceReformatAll = (array) => {
  let newPrice = array.map((newarray) =>{
    price = newarray.price;
    var p;
    p = parseFloat(price).toFixed(2);
    return {...newarray, price: p};
  });
  return newPrice;
};
console.log(`new price array`);
console.log(priceReformatAll(tacos));
console.log(" \n \n");

// write a function that takes an array and logs each item in the array hint forEach

const printArray = (array) => {
  conLog = array.forEach((item) =>{
  return console.log(item);
  });
return conLog;
}
console.log("Printing Taco Array forEach Loop");
printArray(tacos);
console.log(" \n \n");

// use the find method to return the object with id:1

const tacoByID = (tacosArr,index) =>{
  tacoNum = tacosArr.findIndex(taco => taco.id === index);
  console.log(tacosArr[tacoNum]);
};
console.log('Taco by ID');
tacoByID(tacos,1);
console.log(" \n \n");

// return a new array with all prices greater than 19

const priceMoreThan19 = (array) =>{
  let pMT19 = array.filter((newarray)=>{
    price = parseFloat(newarray.price);
    return price>19;
  });
  return pMT19;
};

console.log('Tacos Greater than 19');
greaterThan = priceMoreThan19(tacos);
console.log(greaterThan);
console.log(" \n \n");

// return a new array with a 'about' key where it is a combo of name price and about
const newAboutArray = (array) =>{
  let newAboutArray = array.map((newarray) =>{
    newAbout = `${newarray.name} taco cost $ ${newarray.price} and is ${newarray.about}`;
    return {...newarray, about: newAbout};
  });
  return newAboutArray;
}

console.log(`new About array`);
console.log(newAboutArray(tacos));
console.log(" \n \n");

///CRUD

// don't change tacos array or change objects can hard code data (Don't need to get it from the users)

// READ (array of obj to array of html) 

const arrayToHTML = (array) => {
  html = array.map((item) =>{
  let str = `<a>${item.name} is $${item.price}.00 and is ${item.about}</a>`;
  return str;
  });
return html;
}
console.log("Crud - Read");
console.log(arrayToHTML(tacos));
console.log(" \n \n");

// Update (update a taco) 
const updateTaco = (tacoID, tacoUpdated) => {
  return tacos.map((taco) => (taco.id == tacoID ? tacoUpdated : taco ));
};
const taco3 = {id:4, name:'Pulled Carnitas', price:28, about:'Yummers'};
let updateTacoArray = updateTaco(2,taco3);
console.log("Crud - Update\n changing Taco2 infor to taco3");
console.log(taco3);
console.log(updateTacoArray);
console.log(" \n \n");


// Remove (delete a taco) 

const deleteTaco = (tacoID) => {
  return tacos.filter((taco) =>{
    return taco.id !==tacoID;
  });
};
console.log("Crud - Delete\n removing Taco3");
delTaco = deleteTaco(3)
console.log(delTaco)
console.log(" \n \n");


// Create (add a taco) 

const addTaco = (newTaco) => {
  return [...tacos, newTaco];
};

const taco4 = {id:5, name:'Pulled Pork', price:28, about:'Yums'}

let newTacoArray = addTaco(taco4)
console.log(`Crud - Create`)
console.log(newTacoArray)
console.log(" \n \n");


// bonus use reduce to return the sum of prices in tacos array

// bonus do in rails

// bonus create you own