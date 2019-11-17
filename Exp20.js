var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//base line for the example is a vehicle class and an interface callde IVehicle
var Vehicle = /** @class */ (function () {
    function Vehicle(color) {
        this.color = color;
    }
    Vehicle.prototype.start = function (type) {
        return 'the' + this.color + '' + type + 'started';
    };
    return Vehicle;
}());
//"Vehicle" forms the foundation for both car and truck classes
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(color) {
        return _super.call(this, color) || this;
    }
    Car.prototype.start = function () {
        return _super.prototype.start.call(this, 'car');
    };
    return Car;
}(Vehicle));
//At the top of hte hierarchy we find Sedan class which is a specialized car.
//Sedan inherits car ,but it also implements two interafaces ;ITrunk and IWindow.
//Multiple inheritances at class level is not supported so a class can be implemnted only by  a single class.
//However as mentioned above mulitple interfaces can be implemnted by a single class.
var Sedan = /** @class */ (function (_super) {
    __extends(Sedan, _super);
    function Sedan(color) {
        return _super.call(this, color) || this;
    }
    Sedan.prototype.start = function () {
        return _super.prototype.start.call(this) + 'and it is a Sedan';
    };
    Sedan.prototype.openTrunk = function () {
        console.log('Trunk is open');
    };
    Sedan.prototype.openWindow = function () {
        console.log('Window is open');
    };
    return Sedan;
}(Car));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(color) {
        return _super.call(this, color) || this;
    }
    Truck.prototype.start = function () {
        return _super.prototype.start.call(this, 'truck');
    };
    return Truck;
}(Vehicle));
var car = new Car('green');
var sedan = new Sedan('red');
sedan.openTrunk();
sedan.openWindow();
sedan.start();
var truck = new Truck('blue');
truck.start();
