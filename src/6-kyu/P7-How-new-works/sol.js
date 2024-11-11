function MyObject() {
    this.name = "MyObject instance";
    this.myOwnProperty = "huzaifa";  
}

const myObj = {};

myObj.__proto__ = MyObject.prototype;

MyObject.call(myObj);