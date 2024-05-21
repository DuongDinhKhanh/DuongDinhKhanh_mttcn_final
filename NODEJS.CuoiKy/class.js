// class không phải là 1 object
// class là template để tạo object

class Car {
    constructor (name , color){//thuộc tính
        this.name = name // gán thuộc tính name của class cho name
        this.color = color 

    }
    // hai method getName và getColor
    getName = () => {
        return this.name
    }

    getColor = () => {
        return this.color
    }
}
class SuperCar extends Car{ // extends cú pháp kế thừa
    constructor(name ,color,signature){
        super(name , color)
        this.signature = signature
    }
    
}
// tạo 1 objec( đối tượng) bmw
const bmw = new Car('BMW' , 'Black')// truyền thuộc tính vào
const toyota = new Car('Toyota','Red')
const ferrari = new SuperCar ('Ferrari', 'Red','Ferrari signature')
console.log(JSON.stringify(bmw))
console.log(JSON.stringify(toyota))
console.log(ferrari)
