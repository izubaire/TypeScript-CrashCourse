// Type annotation
let fullName : string = "John";

fullName = "Jack";

let num : number;
num = 12;

const names : string[] = [];
names.push('hello')

function sum( a:number, b:number ) : number {
    return a + b;
}

// Tuples
let address : [number, string, boolean?]; // optional boolean
address = [12, "hello"];

let newAddress : [number, string, boolean];
newAddress = [12, "hi", true];

let person : { name : string, age : number };
person = {
    name: "John",
    age: 12
}

// Optional 
function add(a : number, b : number, c? : number) {
    return c ? a + b + c : a + b;
}
add(1,2,3)

// Interface
interface Person {
    id: number,
    name: string,
    age: number
}
let p : Person;
p = {
    id: 3,
    name: "John",
    age: 12
}

// Union and Intersection
interface Student {
    name: string,
    rollNo: number,
    age: number,
}
let p1 : Person | Student; // This is Union
p1 = {
    name: "John",
    age: 12,
    id: 2
}

let p2 : Person & Student  = {
    name: "Jack",
    age: 12,
    id: 3,
    rollNo: 22
}

// Type Aliases
type Count = number | string;
let c : Count;
c = 1;
c = "hello"

type X = string | number;

// never
const n:[] = []; // never array
// n.push("hello")

// Class
class Car {  // In JavaScript
    brand;
    constructor(brand) {
        this.brand = brand
    }
    getBrand() {
        console.log(this.brand);
    }
}
let c1 = new Car("BMW");
// c1.getBrand();

// In TypeScript

// Public Class
class CarX{ 
    constructor(public brand) {
    }
    getBrand() {
        console.log(this.brand);
    }
}
let c2 = new CarX("Fortuner");
// c2.getBrand();
c2.brand // accessing the public property

// Private Class
class CarY{
    constructor(private brand) {
    }
    getBrand() {
        console.log(this.brand);
    }
}
let c3 = new CarY("Land Rover");
// c3.getBrand();
// c3.brand // don't access the private property

class CarZ{
    constructor(protected brand) {
    }
    getBrand() {
        console.log(this.brand);
    }
}
let c4 = new CarZ("Range Rover");
// c4.getBrand();

// Implements

interface ICar {
    brand: String,
    model: String
}

interface ICar2 {
    release: number
}

class CarA implements ICar, ICar2{
    constructor(public brand, public model, public release) {
    }
}   

// Generic
function gen<T>(a : T,b : T) : T[] {
    return [a,b]
}
gen<string>('1', '2');
gen<number>(1, 2);
gen<Array<number>>([1], [2]);
gen<Array<string>>(['1'], ['2']);

function addUser<T extends {id:string}> (user : T) {
    return user.id;
}

// any type
function noRestriction(a : any, b : any) :any {
    return a + b;
}