//          TASK 1
function returnFirstArgument(arg) {
    return arg;
}

function defaultParameterValue(a, b = 100) {
    return a + b;
}

function returnArgumentsArray(...args) {
    return args;
}

function returnFnResult(fn) {
    return fn();
}

function bindFunction(fn, name, age) {
    this.name = name;
    this.age = age;
    fn.bind(this);
    return fn();
}
function F() 
{ 
    console.log(`My name is ${this.name}. I am ${this.age}`);
}
// bindFunction( F, "Arseniy", 22);

//              TASK 2
function forEach(array, fn) {
    for(let i = 0; i < array.length; i++)
    {
        array[i] = fn( element = array[i] , index = i , array = array );
    }
    return array; 
}
function fnFE(element , index , array)
{
    console.log(`${index + 1}: ${element} in array - [${array}]`);
    // TO DO...
    return element;
}
// forEach([123 , 33 , 'string' , true] , fnFE);

function map(array, fn) {
    var NewArray = new Array();
    for(let i = 0; i < array.length; i++)
    {
        NewArray.push( fn( element = array[i] , index = i , array = array ) );
    }
    return NewArray;
}
function fnM(element , index , array)
{
    console.log(`${index + 1}: ${element} in array - [${array}]`);
    // TO DO...
    return element;
}
// map( [123 , 33 , 'string' , true] , fnM );

function reduce(array, fn , initial = 0) {
    var accumulator = initial;
    for(let i = 0; i < array.length; i++)
    {
        accumulator = fn( accumulator,  currentValue = array[i] , index = i , array = array );
    }
    return array;
}
function fnR(accumulator , currentValue , index , array)
{
    accumulator = accumulator + currentValue;
    // TO DO...
    return accumulator;
}
// reduce([100 , 2 , 3] , fnR , -5 )

function slice (array, begin = 0 , end = array.length) {
    var NewArray = new Array();
    if ( begin > array.length ) begin = array.length;
    if ( begin < -array.length) begin = -array.length;
    if ( begin < 0) begin = array.length + begin ;
    if ( end > array.length ) end = array.length;
    if ( end < -array.length) end = -array.length;
    if ( end < 0 ) end = array.length + end;
    for(let i = begin; i < end; i++)
    {
        NewArray.push( array[i] );
    }
    return NewArray;
}
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(animals.slice(-3 , 15));
// console.log(slice(animals, -3 , 15));

//          TASK 3
var object = 
{
    link : 'vk.com',
    year : 2006
}

function deleteProperty(obj, prop) {
    return delete obj[prop];
}
// deleteProperty( object , 'link');
// console.log(object)

function hasProperty(obj, prop) {
    if(prop in obj) console.log(true);
    else console.log(false);
}
// hasProperty(object , 'link');

function getEnumProps(obj) {
    var array = new Array();
    for(prop in obj)
        array.push(prop);
    return array;    
}
// console.log(getEnumProps(object));

function upperProps(obj) {
    for(prop in obj)
    {
        let value = obj[prop];  
        delete obj[prop];
        obj[prop.toUpperCase()] = value;
    }
    return obj;
}
// console.log(upperProps(object));

function createProxy(obj) {
    return new Proxy(obj , 
    {
        set(obj , prop , value)
        {
            if (typeof value == 'number') 
            {
                obj[prop] = value**2;
                return true;
            } 
            else return false;
        }
    });
}
var proxy = createProxy(object);
proxy.test = 5;
console.log(proxy.test);
console.log(object.test);
