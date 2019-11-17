//an interface called IVehicle
interface IVehicle{
    start(type:string):string;

}
//base line for the example is a vehicle class and an interface callde IVehicle
class Vehicle implements IVehicle{
    constructor(public color:string){

    }
    start(type:string){
        return 'the'+this.color+''+type+'started';
    }
}

//"Vehicle" forms the foundation for both car and truck classes

class Car extends Vehicle{
    constructor(color:string){
        super(color);
    }

start(){
    return super.start('car');
}
}
interface ITrunk{
    openTrunk():void
}
interface IWindow{
    openWindow():void
}
//At the top of hte hierarchy we find Sedan class which is a specialized car.
//Sedan inherits car ,but it also implements two interafaces ;ITrunk and IWindow.
//Multiple inheritances at class level is not supported so a class can be implemnted only by  a single class.
//However as mentioned above mulitple interfaces can be implemnted by a single class.
class Sedan extends Car implements ITrunk,IWindow{
    constructor(color:string){
        super(color);
    }
    start(){
        return super.start()+'and it is a Sedan';
    }
    openTrunk(){
        console.log('Trunk is open');
    }
    openWindow(){
        console.log('Window is open');
    }
}

class Truck extends Vehicle{
    constructor(color:string){
        super(color);
    }
    start(){
        return super.start('truck');
        
    }
}

var car=new Car('green');
var sedan=new Sedan('red');
sedan.openTrunk();
sedan.openWindow();

var truck=new Truck('blue');
truck.start();
