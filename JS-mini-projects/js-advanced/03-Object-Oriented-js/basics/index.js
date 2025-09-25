// I would like to say it is like creating an factory with a bluePrint of how 
/// the object would look like and with that bluePrint, so that we can create 
///  different values, this is called OOPS basically

// !-- Constructor function 
function CreatePencil (name, price,color,company) {
    this.name = name; // here the value of this is blank object created by NEW keyword
    this.price = price;
    this.color = color;
    this.company = company;
    
}

CreatePencil.prototype.write = function(text){
        let h1 = document.createElement('h1');
        h1.textContent = text
        h1.style.color = this.color
        document.body.append(h1);
    }

let pencil1 = new CreatePencil('Nat', 10 ,'orange', 'Nat raj');
let pencil2 = new CreatePencil('Doom', 10 ,'white', 'Nat raj');
let pencil3 = new CreatePencil('slb', 10 ,'green', 'bb');

console.log(pencil1);
console.log(pencil2);

pencil1.write(`My name is ${pencil1.name} and I am affordable with ${pencil1.price} rupees.`)
pencil2.write(`Meet me ${pencil2.name}, I believe in comfort, and speed within ${pencil2.price} rupees`)
pencil3.write(`${pencil3.name} : Fast, Comfortable, and affordable within ${pencil3.price} rupees`)

// !-- protoTypes :
// Prototype is used when we want to share methods or properties across all objects created 
// by a constructor, so that they don’t get duplicated in every instance.

CreatePencil.prototype.madeIn ='Made in India with Love'

console.log('+++++++++++',pencil1);
